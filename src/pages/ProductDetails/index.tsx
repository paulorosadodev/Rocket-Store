import { useEffect, useState } from "react";

import { useOutletContext,useParams } from "react-router-dom";

import type { Product } from "../../@types";

import * as S from "./styles";

import { ProductImageContainer } from "../../components/ProductImageContainer";

import { useCart } from "../../hooks/useCart";

import { fetchProductById } from "../../services/api/products";

import { addPedido } from "../../services/storage/pedidosStorage";
import { triggerPedidosUpdate } from "../../services/storage/pedidosUpdateService"; 
import { getProductDetailsCache, setProductDetailsCache } from "../../services/storage/productDetailsCacheStorage";

import { ProductDetailsSkeleton } from "./Skeleton";

import rocket  from "../../assets/rocket.png";

import { formatPrice } from "../../utils/formatPrice";
import { ErrorState } from "../../components/ErrorState";
import { SuccessToast } from "../../components/SuccessToast";

export function ProductDetails() {

    const { id } = useParams<{ id: string }>();

    const { incrementCart } = useCart();

    const outletContext = useOutletContext<{ setToast: (msg: string) => void }>();

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [product, setProduct] = useState<Product | null>(null);
    const [showAddToCartToast, setShowAddToCartToast] = useState(false);

    useEffect(() => {
        if (!id) return;
        setLoading(true);
        const cached = getProductDetailsCache(Number(id));
        if (cached) {
            setProduct(cached);
            setLoading(false);
            return;
        }
        fetchProductById(Number(id))
            .then((data) => {
                setProduct(data);
                setLoading(false);
                setProductDetailsCache(Number(id), data);
            })
            .catch((e) => {
                setError(e.message);
                setLoading(false);
            });
    }, [id]);

    function handleAddToCart() {
        if (!product) return;
        incrementCart({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            quantity: 1,
        });
        setShowAddToCartToast(true);
    }

    function handleBuyNow() {
        if (!product) return;
        addPedido([
            {
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.image,
                quantity: 1,
            }
        ]);
        outletContext?.setToast?.("Compra efetuada com sucesso!");
        triggerPedidosUpdate(); 
    }

    if (loading) return <ProductDetailsSkeleton />;

    if (error)
        return <ErrorState message={"Erro ao carregar produto"} error={error} />;

    if (!product)
        return (
            <S.ProductNotFoundWrapper>
                <img src={rocket} alt="Rocket Store Logo" />
                <h1>Produto não encontrado</h1>
            </S.ProductNotFoundWrapper>
        );

    return (
        <>
            {showAddToCartToast && (
                <SuccessToast message="Produto adicionado ao carrinho!" onClose={() => setShowAddToCartToast(false)} variant="cart" />
            )}
            <S.ProductDetailsWrapper>
                <ProductImageContainer src={product.image} alt={product.title} size="large" />
                <S.ProductInfo>
                    <S.ProductTitle>{product.title}</S.ProductTitle>
                    <S.ProductDescription>{product.description}</S.ProductDescription>
                    <S.ProductPrice>
                        {formatPrice(product.price)}
                    </S.ProductPrice>
                    <S.ProductActionsWrapper>
                        <S.ProductActions>
                            <S.BuyButton onClick={handleBuyNow}>Comprar agora</S.BuyButton>
                            <S.AddToCartButton onClick={handleAddToCart}>Adicionar ao carrinho</S.AddToCartButton>
                        </S.ProductActions>
                    </S.ProductActionsWrapper>
                </S.ProductInfo>
            </S.ProductDetailsWrapper>
        </>
    );

}
