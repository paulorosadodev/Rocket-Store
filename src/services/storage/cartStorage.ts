import type { CartProduct } from "../../@types";

const CART_KEY = "cart";

export function getCart(): CartProduct[] {
    try {
        const stored = localStorage.getItem(CART_KEY);
        return stored ? JSON.parse(stored) : [];
    } catch {
        return [];
    }
}

export function setCart(cart: CartProduct[]): void {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function clearCart(): void {
    localStorage.removeItem(CART_KEY);
}
