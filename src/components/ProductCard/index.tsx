import { useState } from "react";

import { useNavigate, useOutletContext } from "react-router-dom";

import type { CartProduct, Product } from "../../@types";

import * as S from "./styles";

import { SuccessToast } from "../SuccessToast";
import { ProductImageContainer } from "../ProductImageContainer";

import { formatPrice } from "../../utils/formatPrice";

import { useCart } from "../../hooks/useCart";

import { addPedido } from "../../services/storage/pedidosStorage";
import { triggerPedidosUpdate } from "../../services/storage/pedidosUpdateService"; 

interface ProductCardProps {
    product: Product;
    outletContext?: { setToast: (msg: string) => void };
    onAddToCart?: () => void;
}

export function ProductCard({ product, outletContext, onAddToCart }: ProductCardProps) {

    const { incrementCart } = useCart();

    const navigate = useNavigate();

    const contextFromOutlet = useOutletContext<{ setToast: (msg: string) => void }>();
    const context = outletContext || contextFromOutlet;

    const [showAddToCartToast, setShowAddToCartToast] = useState(false);

    function handleAddToCart(e?: React.MouseEvent) {
        if (e) e.stopPropagation();
        const cartProduct: CartProduct = {
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            quantity: 1,
        };
        incrementCart(cartProduct);
        if (onAddToCart) onAddToCart();
        setShowAddToCartToast(true);
    }

    function handleCardClick() {
        navigate(`/produto/${product.id}`);
    }

    function handleBuyNow() {
        addPedido([
            {
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.image,
                quantity: 1,
            }
        ]);
        context?.setToast?.("Compra efetuada com sucesso!");
        triggerPedidosUpdate(); 
    }

    return (
        <>
            {showAddToCartToast && (
                <SuccessToast message="Produto adicionado ao carrinho!" onClose={() => setShowAddToCartToast(false)} variant="cart" />
            )}
            <S.ProductCardWrapper onClick={handleCardClick}>
                <ProductImageContainer src={product.image} alt={product.title} size="medium" loading="lazy" />
                <S.ProductTitle>{product.title}</S.ProductTitle>
                <S.ProductPrice>{formatPrice(product.price)}</S.ProductPrice>
                <S.BuyNowButton onClick={e => { e.stopPropagation(); handleBuyNow(); }}>
                    Comprar agora
                </S.BuyNowButton>
                <S.AddToCartButton onClick={handleAddToCart} onMouseDown={e => e.stopPropagation()}>
                    Adicionar ao carrinho
                </S.AddToCartButton>
            </S.ProductCardWrapper>
        </>
    );

}
