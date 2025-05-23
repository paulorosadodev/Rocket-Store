import { useOutletContext } from "react-router-dom";

import { useCart } from "../../hooks/useCart";

import type { CartProduct } from "../../@types";

import * as S from "./styles";

import { ProductImageContainer } from "../ProductImageContainer";

import { TrashIcon } from "@phosphor-icons/react";
import { useWindowSize } from "../../hooks/useWindowSize";

import { addPedido } from "../../services/storage/pedidosStorage";
import { triggerPedidosUpdate } from "../../services/storage/pedidosUpdateService";

import { formatPrice } from "../../utils/formatPrice";

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
            {isMobile && <S.MobileOverlay onClick={onClose} />}
            <S.CartModalWrapper isMobile={isMobile}>
                <S.ModalContent isMobile={isMobile}>
                    <S.ModalClose isMobile={isMobile} onClick={onClose} aria-label="Fechar">×</S.ModalClose>
                    <S.ModalTitle isMobile={isMobile}>Meu carrinho</S.ModalTitle>
                    {cart.length === 0 ? (
                        <S.EmptyCartText isMobile={isMobile}>Seu carrinho está vazio</S.EmptyCartText>
                    ) : (
                        <>
                            <S.CartList isMobile={isMobile}>
                                {cart.map((item) => (
                                    <S.CartListItem isMobile={isMobile} key={item.id}>
                                        <ProductImageContainer src={item.image} alt={item.title} size="small" />
                                        <S.CartItemInfo>
                                            <S.CartItemTitle>{item.title}</S.CartItemTitle>
                                            <S.CartItemQuantity>
                                                <S.QuantityButton isMobile={isMobile} onClick={() => handleDecrement(item)} aria-label="Diminuir quantidade">-</S.QuantityButton>
                                                Qtd: {item.quantity}
                                                <S.QuantityButton isMobile={isMobile} onClick={() => handleIncrement(item)} aria-label="Aumentar quantidade">+</S.QuantityButton>
                                            </S.CartItemQuantity>
                                            <S.CartItemPrice>{formatPrice(item.price * item.quantity)}</S.CartItemPrice>
                                        </S.CartItemInfo>
                                        <S.RemoveButton onClick={() => removeFromCart(item.id)} title="Remover">
                                            <TrashIcon size={isMobile ? 24 : 20} weight="bold" />
                                        </S.RemoveButton>
                                    </S.CartListItem>
                                ))}
                            </S.CartList>
                            <S.CartActionsWrapper isMobile={isMobile}>
                                <S.CartTotalRow isMobile={isMobile}>
                                    <span>Total:</span>
                                    <span>{formatPrice(total)}</span>
                                </S.CartTotalRow>
                                <S.CartButtonsRow isMobile={isMobile}>
                                    <S.ClearButton isMobile={isMobile} onClick={handleClear}>Esvaziar</S.ClearButton>
                                    <S.CheckoutButton isMobile={isMobile} onClick={handleCheckout}>Finalizar compra</S.CheckoutButton>
                                </S.CartButtonsRow>
                            </S.CartActionsWrapper>
                        </>
                    )}
                </S.ModalContent>
            </S.CartModalWrapper>
        </>
    );

}
