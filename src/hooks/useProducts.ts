import { useEffect, useState } from "react";

import type { Product } from "../@types";

import { fetchProducts } from "../services/products";

export function useProducts() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;
        setLoading(true);
        const cacheKey = "products_cache_v1";
        const cache = localStorage.getItem(cacheKey);
        const now = Date.now();
        if (cache) {
            try {
                const { data, timestamp } = JSON.parse(cache);
                if (now - timestamp < 10 * 60 * 1000) { 
                    setProducts(data);
                    setLoading(false);
                    return;
                }
            } catch {
                // Se falhar o parse, ignora e faz fetch normalmente
            }
        }
        fetchProducts()
            .then((data) => {
                if (isMounted) {
                    setProducts(data);
                    setLoading(false);
                    localStorage.setItem(cacheKey, JSON.stringify({ data, timestamp: now }));
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
