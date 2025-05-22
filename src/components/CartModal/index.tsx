import type { ReactNode } from "react";
import { ModalContent, ModalTitle, ModalClose, CartModalWrapper } from "./styles";

interface CartModalProps {
    open: boolean;
    onClose: () => void;
    children?: ReactNode;
}

export function CartModal({ open, onClose, children }: CartModalProps) {
    if (!open) return null;
    return (
        <CartModalWrapper>
            <ModalContent>
                <ModalClose onClick={onClose} aria-label="Fechar">×</ModalClose>
                <ModalTitle>Meu carrinho</ModalTitle>
                {children}
            </ModalContent>
        </CartModalWrapper>
    );
}
