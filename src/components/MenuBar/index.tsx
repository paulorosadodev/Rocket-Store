import { useState, useRef } from "react";
import { ShoppingCartIcon } from "@phosphor-icons/react";

import logo from "../../assets/logo.png";
import { useCart } from "../../hooks/useCart";
import { CartIconContainer, MenuBarWrapper, CartIconWrapper } from "./styles";
import { CartModal } from "../CartModal";

export const MenuBar = () => {
    const { cartCount } = useCart();
    const [modalOpen, setModalOpen] = useState(false);
    const cartIconRef = useRef<HTMLDivElement>(null);

    return (
        <MenuBarWrapper>
            <img src={logo} alt="Logo da Rocket Store" />
            <CartIconWrapper ref={cartIconRef}>
                <CartIconContainer onClick={() => setModalOpen((v) => !v)}>
                    <ShoppingCartIcon id="cart-icon" size={32} />
                    {cartCount > 0 && (
                        <span id="cart-counter">{cartCount}</span>
                    )}
                </CartIconContainer>
                <CartModal open={modalOpen} onClose={() => setModalOpen(false)} />
            </CartIconWrapper>
        </MenuBarWrapper>
    );
};