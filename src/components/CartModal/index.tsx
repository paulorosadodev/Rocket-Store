import type { CartProduct } from "../../@types";
import { useCart } from "../../hooks/useCart";
import { ModalContent, ModalTitle, ModalClose, CartModalWrapper, CartList, CartListItem, CartItemInfo, CartItemTitle, CartItemQuantity, CartItemPrice, RemoveButton, EmptyCartText, CartActionsWrapper, CartTotalRow, CartButtonsRow, ClearButton, CheckoutButton, QuantityButton, MobileOverlay } from "./styles";
import { ProductImageContainer } from "../ProductImageContainer";
import { TrashIcon } from "@phosphor-icons/react";
import { useOutletContext } from "react-router-dom";
import { useWindowSize } from "../../hooks/useWindowSize";

import { addPedido } from "../../services/storage/pedidosStorage";
import { triggerPedidosUpdate } from "../../services/storage/pedidosUpdateService";

interface CartModalProps {
    open: boolean;
    onClose: () => void;
    outletContext?: { setToast: (msg: string) => void };
}

export function CartModal({ open, onClose, outletContext }: CartModalProps) {
    const { isMobile } = useWindowSize();
    const { cart, incrementCart, removeFromCart } = useCart();

    const contextFromOutlet = useOutletContext<{ setToast: (msg: string) => void }>();
    const context = outletContext || contextFromOutlet;

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const handleClear = () => {
        cart.forEach(item => removeFromCart(item.id));
    };

    const handleIncrement = (item: CartProduct) => {
        incrementCart({ ...item, quantity: 1 });
    };

    const handleDecrement = (item: CartProduct) => {
        if (item.quantity > 1) {
            removeFromCart(item.id);
            for (let i = 0; i < item.quantity - 1; i++) {
                incrementCart({ ...item, quantity: 1 });
            }
        } else {
            removeFromCart(item.id);
        }
    };

    const handleCheckout = () => {
        if (cart.length === 0) return;
        addPedido(cart);
        handleClear();
        if (onClose) onClose();
        context?.setToast?.("Compra efetuada com sucesso!");
        triggerPedidosUpdate(); 
    };

    if (!open) return null;

    return (
        <>
            {isMobile && <MobileOverlay onClick={onClose} />}
            <CartModalWrapper isMobile={isMobile}>
                <ModalContent isMobile={isMobile}>
                    <ModalClose isMobile={isMobile} onClick={onClose} aria-label="Fechar">×</ModalClose>
                    <ModalTitle isMobile={isMobile}>Meu carrinho</ModalTitle>
                    {cart.length === 0 ? (
                        <EmptyCartText isMobile={isMobile}>Seu carrinho está vazio</EmptyCartText>
                    ) : (
                        <>
                            <CartList isMobile={isMobile}>
                                {cart.map((item) => (
                                    <CartListItem isMobile={isMobile} key={item.id}>
                                        <ProductImageContainer src={item.image} alt={item.title} size="small" />
                                        <CartItemInfo>
                                            <CartItemTitle>{item.title}</CartItemTitle>
                                            <CartItemQuantity>
                                                <QuantityButton isMobile={isMobile} onClick={() => handleDecrement(item)} aria-label="Diminuir quantidade">-</QuantityButton>
                                                Qtd: {item.quantity}
                                                <QuantityButton isMobile={isMobile} onClick={() => handleIncrement(item)} aria-label="Aumentar quantidade">+</QuantityButton>
                                            </CartItemQuantity>
                                            <CartItemPrice>R$ {(item.price * item.quantity).toFixed(2)}</CartItemPrice>
                                        </CartItemInfo>
                                        <RemoveButton onClick={() => removeFromCart(item.id)} title="Remover">
                                            <TrashIcon size={isMobile ? 24 : 20} weight="bold" />
                                        </RemoveButton>
                                    </CartListItem>
                                ))}
                            </CartList>
                            <CartActionsWrapper isMobile={isMobile}>
                                <CartTotalRow isMobile={isMobile}>
                                    <span>Total:</span>
                                    <span>R$ {total.toFixed(2)}</span>
                                </CartTotalRow>
                                <CartButtonsRow isMobile={isMobile}>
                                    <ClearButton isMobile={isMobile} onClick={handleClear}>Esvaziar</ClearButton>
                                    <CheckoutButton isMobile={isMobile} onClick={handleCheckout}>Finalizar compra</CheckoutButton>
                                </CartButtonsRow>
                            </CartActionsWrapper>
                        </>
                    )}
                </ModalContent>
            </CartModalWrapper>
        </>
    );
}
