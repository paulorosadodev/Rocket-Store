import { useRef, useState, useEffect } from "react";
import { CaretRight, CaretLeft } from "@phosphor-icons/react";
import { ProductCard } from "../ProductCard";
import { ProductCardSkeleton } from "../ProductCard/Skeleton";
import { CarouselWrapper, CarouselTitle, CarouselContainer, CarouselInner, CarouselItem, CarouselButton, CarouselSideHover } from "./styles";
import type { Product } from "../../@types";

interface ProductCarouselProps {
    title: string;
    products: Product[];
    skeleton?: boolean;
}

export function ProductCarousel({ title, products, skeleton }: ProductCarouselProps) {
    const carousel = useRef<HTMLDivElement>(null);
    const [hoverSide, setHoverSide] = useState<"left" | "right" | null>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const checkScroll = () => {
        if (carousel.current) {
            const { scrollLeft, scrollWidth, offsetWidth } = carousel.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft + offsetWidth < scrollWidth - 1);
        }
    };

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

    useEffect(() => {
        checkScroll();
    }, [products]);

    if (skeleton) {
        return (
            <CarouselWrapper>
                <CarouselTitle style={{ visibility: "hidden", minHeight: "2.2rem" }}>{title || " "}</CarouselTitle>
                <CarouselContainer>
                    <CarouselInner>
                        {[...Array(6)].map((_, i) => (
                            <CarouselItem key={i}>
                                <ProductCardSkeleton />
                            </CarouselItem>
                        ))}
                    </CarouselInner>
                </CarouselContainer>
            </CarouselWrapper>
        );
    }

    if (!products || !products.length) return null;

    return (
        <CarouselWrapper>
            <CarouselTitle>{title}</CarouselTitle>
            <CarouselContainer>
                <CarouselSideHover
                    side="left"
                    onMouseEnter={() => setHoverSide("left")}
                    onMouseLeave={() => setHoverSide(null)}
                >
                    {hoverSide === "left" && canScrollLeft && (
                        <CarouselButton onClick={handleLeftClick} aria-label="Scroll Left">
                            <CaretLeft size={32} weight="bold" />
                        </CarouselButton>
                    )}
                </CarouselSideHover>
                <CarouselInner ref={carousel} onScroll={handleScroll}>
                    {products.map((product) => (
                        <CarouselItem key={product.id}>
                            <ProductCard product={product} />
                        </CarouselItem>
                    ))}
                </CarouselInner>
                <CarouselSideHover
                    side="right"
                    onMouseEnter={() => setHoverSide("right")}
                    onMouseLeave={() => setHoverSide(null)}
                >
                    {hoverSide === "right" && canScrollRight && (
                        <CarouselButton onClick={handleRightClick} aria-label="Scroll Right">
                            <CaretRight size={32} weight="bold" />
                        </CarouselButton>
                    )}
                </CarouselSideHover>
            </CarouselContainer>
        </CarouselWrapper>
    );
}
