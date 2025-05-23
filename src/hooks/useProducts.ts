import { useEffect, useState } from "react";

import type { Product } from "../@types";

import { fetchProducts } from "../services/api/products";
import { getProductsCache, setProductsCache } from "../services/storage/productCacheStorage";

export function useProducts() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;
        setLoading(true);
        const cached = getProductsCache();
        if (cached) {
            setProducts(cached);
            setLoading(false);
            return;
        }
        fetchProducts()
            .then((data) => {
                if (isMounted) {
                    setProducts(data);
                    setLoading(false);
                    setProductsCache(data);
                }
            })
            .catch(() => {
                if (isMounted) {
                    setError("Erro ao carregar produtos");
                    setLoading(false);
                }
            });
        return () => {
            isMounted = false;
        };
    }, []);

    return { products, loading, error };
}
