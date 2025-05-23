import { useEffect, useState } from "react";

import type { Product } from "../@types";

import { fetchProducts } from "../services/api/products";
import { getProductsCache, setProductsCache } from "../services/storage/productCacheStorage";

export function useProducts() {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [products, setProducts] = useState<Product[]>([]);

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
            .catch((e) => {
                if (isMounted) {
                    setError(e.message);
                    setLoading(false);
                }
            });

        return () => {
            isMounted = false;
        };

    }, []);

    return { products, loading, error };

}
