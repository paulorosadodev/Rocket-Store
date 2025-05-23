import { useState, useRef, useEffect } from "react";
import { ShoppingCartIcon, ListBulletsIcon } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/logo.png";
import { useCart } from "../../hooks/useCart";
import { CartIconContainer, MenuBarWrapper, CartIconWrapper, OrdersIconContainer, MobileTopBar } from "./styles";
import { CartModal } from "../CartModal";
import { SearchBar } from "../SearchBar";

interface MenuBarProps {
    setToast?: (msg: string) => void;
}

export const MenuBar = ({ setToast }: MenuBarProps) => {
    const { cartCount } = useCart();
    const [modalOpen, setModalOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const cartIconRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

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
        <CartIconWrapper ref={cartIconRef}>
            <OrdersIconContainer onClick={() => navigate("/pedidos")} title="Meus pedidos">
                <ListBulletsIcon size={28} weight="bold" />
            </OrdersIconContainer>
            <CartIconContainer onClick={() => setModalOpen((v) => !v)} title="Meu carrinho">
                <ShoppingCartIcon id="cart-icon" size={32} />
                {cartCount > 0 && (
                    <span id="cart-counter">{cartCount}</span>
                )}
            </CartIconContainer>
            <CartModal 
                open={modalOpen} 
                onClose={() => setModalOpen(false)} 
                outletContext={setToast ? { setToast } : undefined} 
            />
        </CartIconWrapper>
    );

    return (
        <MenuBarWrapper>
            {isMobile ? (
                <>
                    <MobileTopBar>
                        <img
                            src={logo}
                            alt="Logo da Rocket Store"
                            className="logo-clickable"
                            onClick={() => navigate("/")}
                        />
                        {renderCartIcons()}
                    </MobileTopBar>
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
        </MenuBarWrapper>
    );
};