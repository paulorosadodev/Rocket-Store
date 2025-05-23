import type { Product } from "../../@types";

export function getProductDetailsCache(id: number): Product | null {
    const cacheKey = `product_cache_v1_${id}`;
    try {
        const cache = localStorage.getItem(cacheKey);
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

export function setProductDetailsCache(id: number, data: Product): void {
    const cacheKey = `product_cache_v1_${id}`;
    localStorage.setItem(cacheKey, JSON.stringify({ data, timestamp: Date.now() }));
}
