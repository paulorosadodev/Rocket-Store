import { useCart } from "../../hooks/useCart";
import { ModalContent, ModalTitle, ModalClose, CartModalWrapper, CartList, CartListItem, CartItemImage, CartItemInfo, CartItemTitle, CartItemQuantity, CartItemPrice, RemoveButton, EmptyCartText } from "./styles";

interface CartModalProps {
    open: boolean;
    onClose: () => void
}

export function CartModal({ open, onClose }: CartModalProps) {
    const { cart, removeFromCart } = useCart();
    if (!open) return null;
    return (
        <CartModalWrapper>
            <ModalContent>
                <ModalClose onClick={onClose} aria-label="Fechar">×</ModalClose>
                <ModalTitle>Meu carrinho</ModalTitle>
                {cart.length === 0 ? (
                    <EmptyCartText>Seu carrinho está vazio.</EmptyCartText>
                ) : (
                    <CartList>
                        {cart.map((item) => (
                            <CartListItem key={item.id}>
                                <CartItemImage src={item.image} alt={item.title} />
                                <CartItemInfo>
                                    <CartItemTitle>{item.title}</CartItemTitle>
                                    <CartItemQuantity>Qtd: {item.quantity}</CartItemQuantity>
                                    <CartItemPrice>R$ {(item.price * item.quantity).toFixed(2)}</CartItemPrice>
                                </CartItemInfo>
                                <RemoveButton onClick={() => removeFromCart(item.id)} title="Remover">×</RemoveButton>
                            </CartListItem>
                        ))}
                    </CartList>
                )}
            </ModalContent>
        </CartModalWrapper>
    );
}
