import type { Product } from "../../@types";

const PRODUCTS_CACHE_KEY = "products_cache_v1";

export function getProductsCache(): Product[] | null {
    try {
        const cache = localStorage.getItem(PRODUCTS_CACHE_KEY);
        if (!cache) return null;
        const { data, timestamp } = JSON.parse(cache);
        if (Date.now() - timestamp < 10 * 60 * 1000) {
            return data;
        }
        return null;
    } catch {
        return null;
    }
}

export function setProductsCache(data: Product[]): void {
    localStorage.setItem(PRODUCTS_CACHE_KEY, JSON.stringify({ data, timestamp: Date.now() }));
}
