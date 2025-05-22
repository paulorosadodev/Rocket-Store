import { useEffect, useState } from "react";
import { ProductDetailsWrapper,ProductImage, ProductImageWrapper, ProductInfo, ProductTitle, ProductDescription, ProductPrice, ProductActions, BuyButton, AddToCartButton, ProductActionsWrapper} from "./styles";

import { useParams } from "react-router-dom";

import { useCart } from "../../hooks/useCart";

import { fetchProductById } from "../../services/products";

import type { Product } from "../../@types";

import { ProductDetailsSkeleton } from "./Skeleton";

export function ProductDetails() {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const { incrementCart } = useCart();

    useEffect(() => {
        if (!id) return;
        setLoading(true);
        const cacheKey = `product_cache_v1_${id}`;
        const cache = localStorage.getItem(cacheKey);
        const now = Date.now();
        if (cache) {
            try {
                const { data, timestamp } = JSON.parse(cache);
                if (now - timestamp < 10 * 60 * 1000) {
                    setProduct(data);
                    setLoading(false);
                    return;
                }
            } catch {
                // Se falhar o parse, ignora e faz fetch normalmente
            }
        }
        fetchProductById(Number(id))
            .then((data) => {
                setProduct(data);
                setLoading(false);
                localStorage.setItem(cacheKey, JSON.stringify({ data, timestamp: now }));
            })
            .catch(() => {
                setError("Erro ao carregar produto");
                setLoading(false);
            });
    }, [id]);

    if (loading) return <ProductDetailsSkeleton />;
    if (error || !product)
        return (
            <ProductDetailsWrapper>{error || "Produto não encontrado"}</ProductDetailsWrapper>
        );

    function handleAddToCart() {
        if (!product) return;
        incrementCart({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            quantity: 1,
        });
    }

    function handleBuyNow() {
        handleAddToCart();
        // Navegação para o carrinho pode ser implementada aqui
    }

    return (
        <ProductDetailsWrapper>
            <ProductImageWrapper>
                <ProductImage src={product.image} alt={product.title} />
            </ProductImageWrapper>
            <ProductInfo>
                <ProductTitle>{product.title}</ProductTitle>
                <ProductDescription>{product.description}</ProductDescription>
                <ProductPrice>
                    {product.price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                    })}
                </ProductPrice>
                <ProductActionsWrapper>
                    <ProductActions>
                        <BuyButton onClick={handleBuyNow}>Comprar agora</BuyButton>
                        <AddToCartButton onClick={handleAddToCart}>
                            Adicionar ao carrinho
                        </AddToCartButton>
                    </ProductActions>
                </ProductActionsWrapper>
            </ProductInfo>
        </ProductDetailsWrapper>
    );
}
