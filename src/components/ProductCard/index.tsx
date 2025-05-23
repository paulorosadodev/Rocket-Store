import { useNavigate, useOutletContext } from "react-router-dom";

import { ProductCardWrapper, ProductTitle, ProductPrice, AddToCartButton, BuyNowButton } from "./styles";
import { ProductImageContainer } from "../ProductImageContainer";

import type { CartProduct, Product } from "../../@types";

import { useCart } from "../../hooks/useCart";

import { triggerPedidosUpdate } from "../../services/storage/pedidosUpdateService"; 

import { addPedido } from "../../services/storage/pedidosStorage";

interface ProductCardProps {
    product: Product;
    outletContext?: { setToast: (msg: string) => void };
}

export function ProductCard({ product, outletContext }: ProductCardProps) {

    const { incrementCart } = useCart();

    const navigate = useNavigate();

    const contextFromOutlet = useOutletContext<{ setToast: (msg: string) => void }>();
    const context = outletContext || contextFromOutlet;

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
        <ProductCardWrapper onClick={handleCardClick} style={{ cursor: "pointer" }}>
            <ProductImageContainer src={product.image} alt={product.title} size="medium" loading="lazy" />
            <ProductTitle>{product.title}</ProductTitle>
            <ProductPrice>R$ {product.price.toFixed(2)}</ProductPrice>
            <BuyNowButton onClick={e => { e.stopPropagation(); handleBuyNow(); }}>
                Comprar agora
            </BuyNowButton>
            <AddToCartButton onClick={handleAddToCart} onMouseDown={e => e.stopPropagation()}>
                Adicionar ao carrinho
            </AddToCartButton>
        </ProductCardWrapper>
    );
}
