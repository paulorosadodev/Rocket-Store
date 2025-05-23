import { useRef, useState, useEffect, useCallback } from "react";

import { CaretRightIcon, CaretLeftIcon } from "@phosphor-icons/react";

import type { Product } from "../../@types";

import * as S from "./styles";

import { ProductCard } from "../ProductCard";
import { ProductCardSkeleton } from "../ProductCard/Skeleton";

import { useWindowSize } from "../../hooks/useWindowSize";

interface ProductCarouselProps {
    title: string;
    products: Product[];
    skeleton?: boolean;
    outletContext?: { setToast: (msg: string) => void };
}

export function ProductCarousel({ title, products, skeleton, outletContext }: ProductCarouselProps) {

    const carousel = useRef<HTMLDivElement>(null);

    const { width, isMobile } = useWindowSize();

    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);
    const [hoverSide, setHoverSide] = useState<"left" | "right" | null>(null);

    const checkScroll = useCallback(() => {
        if (carousel.current) {
            const { scrollLeft, scrollWidth, offsetWidth } = carousel.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft + offsetWidth < scrollWidth - 1);
        }
    }, []);

    const handleLeftClick = (e: React.MouseEvent) => {
        e.preventDefault();
        if (carousel.current) {
            carousel.current.scrollLeft -= carousel.current.offsetWidth;
            setTimeout(checkScroll, 300);
        }
    };

    const handleRightClick = (e: React.MouseEvent) => {
        e.preventDefault();
        if (carousel.current) {
            carousel.current.scrollLeft += carousel.current.offsetWidth;
            setTimeout(checkScroll, 300);
        }
    };

    const handleScroll = () => checkScroll();

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!carousel.current) return;
        
        setIsDragging(true);
        setStartX(e.pageX - carousel.current.offsetLeft);
        setScrollLeft(carousel.current.scrollLeft);
        document.body.style.userSelect = "none";
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        if (!carousel.current || e.touches.length !== 1) return;

        setIsDragging(true);
        setStartX(e.touches[0].pageX - carousel.current.offsetLeft);
        setScrollLeft(carousel.current.scrollLeft);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !carousel.current) return;
        
        e.preventDefault();
        const x = e.pageX - carousel.current.offsetLeft;
        const walk = (x - startX) * 1.5; 
        carousel.current.scrollLeft = scrollLeft - walk;
        checkScroll();
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging || !carousel.current || e.touches.length !== 1) return;
        
        const x = e.touches[0].pageX - carousel.current.offsetLeft;
        const walk = (x - startX) * 1.5;
        carousel.current.scrollLeft = scrollLeft - walk;
        checkScroll();
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        document.body.style.userSelect = "";
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
    };

    const handleMouseLeave = () => {
        if (isDragging) {
            setIsDragging(false);
            document.body.style.userSelect = "";
        }
    };

    useEffect(() => {
        checkScroll();

        document.addEventListener("mouseup", handleMouseUp);
        document.addEventListener("touchend", handleTouchEnd);
        
        return () => {
            document.removeEventListener("mouseup", handleMouseUp);
            document.removeEventListener("touchend", handleTouchEnd);
            document.body.style.userSelect = "";
        };
    }, [products, checkScroll]);

    if (skeleton) {
        return (
            <S.CarouselWrapper>
                <S.CarouselTitle style={{ visibility: "hidden", minHeight: "2.2rem" }}>{title || " "}</S.CarouselTitle>
                <S.CarouselContainer>
                    <S.CarouselInner>
                        {[...Array(6)].map((_, i) => (
                            <S.CarouselItem key={i}>
                                <ProductCardSkeleton />
                            </S.CarouselItem>
                        ))}
                    </S.CarouselInner>
                </S.CarouselContainer>
            </S.CarouselWrapper>
        );
    }

    if (!products || !products.length) return null;

    return (
        <S.CarouselWrapper>
            <S.CarouselTitle>{title}</S.CarouselTitle>
            <S.CarouselContainer>
                <S.CarouselSideHover side="left" onMouseEnter={() => setHoverSide("left")} onMouseLeave={() => setHoverSide(null)}>
                    {(hoverSide === "left" || isMobile) && canScrollLeft && (
                        <S.CarouselButton onClick={handleLeftClick} aria-label="Scroll Left">
                            <CaretLeftIcon size={width <= 480 ? 24 : 32} weight="bold" />
                        </S.CarouselButton>
                    )}
                </S.CarouselSideHover>
                <S.CarouselInner ref={carousel} onScroll={handleScroll} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onMouseLeave={handleMouseLeave}onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd} style={{ cursor: isDragging ? "grabbing" : "grab" }}>
                    {products.map((product) => (
                        <S.CarouselItem key={product.id}>
                            <ProductCard product={product} outletContext={outletContext} />
                        </S.CarouselItem>
                    ))}
                </S.CarouselInner>
                <S.CarouselSideHover side="right" onMouseEnter={() => setHoverSide("right")} onMouseLeave={() => setHoverSide(null)}>
                    {(hoverSide === "right" || isMobile) && canScrollRight && (
                        <S.CarouselButton onClick={handleRightClick} aria-label="Scroll Right">
                            <CaretRightIcon size={width <= 480 ? 24 : 32} weight="bold" />
                        </S.CarouselButton>
                    )}
                </S.CarouselSideHover>
            </S.CarouselContainer>
        </S.CarouselWrapper>
    );

}
