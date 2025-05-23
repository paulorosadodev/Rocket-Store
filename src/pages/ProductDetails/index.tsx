import { useEffect, useState } from "react";
import { useOutletContext,useParams } from "react-router-dom";

import type { Product } from "../../@types";

import { ProductDetailsWrapper, ProductInfo, ProductTitle, ProductDescription, ProductPrice, ProductActions, BuyButton, AddToCartButton, ProductActionsWrapper, ProductNotFoundWrapper} from "./styles";
import { ProductImageContainer } from "../../components/ProductImageContainer";

import { useCart } from "../../hooks/useCart";

import { triggerPedidosUpdate } from "../../services/storage/pedidosUpdateService"; 

import { fetchProductById } from "../../services/api/products";
import { addPedido } from "../../services/storage/pedidosStorage";
import { getProductDetailsCache, setProductDetailsCache } from "../../services/storage/productDetailsCacheStorage";

import { ProductDetailsSkeleton } from "./Skeleton";

import rocket  from "../../assets/rocket.png";

export function ProductDetails() {

    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const { incrementCart } = useCart();
    const outletContext = useOutletContext<{ setToast: (msg: string) => void }>();

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
            .catch(() => {
                setError("Erro ao carregar produto");
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

    if (error || !product)
        return (
            <ProductNotFoundWrapper>
                <img src={rocket} alt="Rocket Store Logo" />
                <h1>{error || "Produto não encontrado"}</h1>
            </ProductNotFoundWrapper>
        );

    return (
        <ProductDetailsWrapper>
            <ProductImageContainer src={product.image} alt={product.title} size="large" />
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
