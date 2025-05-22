import { ProductCardWrapper, ProductImageWrapper, ProductImage, ProductTitle, ProductPrice, AddToCartButton } from "./styles";
import { useCart } from "../../hooks/useCart";
import type { Product } from "../../@types";
import type { CartProduct } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    const { incrementCart } = useCart();
    const navigate = useNavigate();
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
    return (
        <ProductCardWrapper onClick={handleCardClick} style={{ cursor: "pointer" }}>
            <ProductImageWrapper>
                <ProductImage src={product.image} alt={product.title} loading="lazy" />
            </ProductImageWrapper>
            <ProductTitle>{product.title}</ProductTitle>
            <ProductPrice>R$ {product.price.toFixed(2)}</ProductPrice>
            <AddToCartButton onClick={handleAddToCart} onMouseDown={e => e.stopPropagation()}>
                Adicionar ao carrinho
            </AddToCartButton>
        </ProductCardWrapper>
    );
}
