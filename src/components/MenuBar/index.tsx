import { useState, useRef, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { ShoppingCartIcon, ListBulletsIcon } from "@phosphor-icons/react";

import * as S from "./styles";

import logo from "../../assets/logo.png";

import { CartModal } from "../CartModal";
import { SearchBar } from "../SearchBar";

import { useCart } from "../../hooks/useCart";

interface MenuBarProps {
    setToast?: (msg: string) => void;
}

export const MenuBar = ({ setToast }: MenuBarProps) => {

    const navigate = useNavigate();

    const { cartCount } = useCart();

    const cartIconRef = useRef<HTMLDivElement>(null);

    const [isMobile, setIsMobile] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        checkIfMobile();
        
        window.addEventListener("resize", checkIfMobile);
        
        return () => {
            window.removeEventListener("resize", checkIfMobile);
        };
    }, []);

    const renderCartIcons = () => (
        <S.CartIconWrapper ref={cartIconRef}>
            <S.OrdersIconContainer onClick={() => navigate("/pedidos")} title="Meus pedidos">
                <ListBulletsIcon size={28} weight="bold" />
            </S.OrdersIconContainer>
            <S.CartIconContainer onClick={() => setModalOpen((v) => !v)} title="Meu carrinho">
                <ShoppingCartIcon id="cart-icon" size={32} />
                {cartCount > 0 && (
                    <span id="cart-counter">{cartCount}</span>
                )}
            </S.CartIconContainer>
            <CartModal 
                open={modalOpen} 
                onClose={() => setModalOpen(false)} 
                outletContext={setToast ? { setToast } : undefined} 
            />
        </S.CartIconWrapper>
    );

    return (
        <S.MenuBarWrapper>
            {isMobile ? (
                <>
                    <S.MobileTopBar>
                        <img
                            src={logo}
                            alt="Logo da Rocket Store"
                            className="logo-clickable"
                            onClick={() => navigate("/")}
                        />
                        {renderCartIcons()}
                    </S.MobileTopBar>
                    <SearchBar />
                </>
            ) : (
                <>
                    <img
                        src={logo}
                        alt="Logo da Rocket Store"
                        className="logo-clickable"
                        onClick={() => navigate("/")}
                    />
                    <SearchBar />
                    {renderCartIcons()}
                </>
            )}
        </S.MenuBarWrapper>
    );

};
