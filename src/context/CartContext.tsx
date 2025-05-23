import { createContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import type { CartProduct } from "../@types";
import { getCart, setCart } from "../services/storage/cartStorage";

interface CartContextType {
    cart: CartProduct[];
    cartCount: number;
    incrementCart: (product: CartProduct) => void;
    removeFromCart: (id: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [cart, setCartState] = useState<CartProduct[]>(() => getCart());

    useEffect(() => {
        setCart(cart);
    }, [cart]);

    const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

    function incrementCart(product: CartProduct) {
        setCartState((prev) => {
            const exists = prev.find((p) => p.id === product.id);
            if (exists) {
                return prev.map((p) =>
                    p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
    }

    function removeFromCart(id: number) {
        setCartState((prev) => prev.filter((p) => p.id !== id));
    }

    return (
        <CartContext.Provider value={{ cart, cartCount, incrementCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
}

export {CartContext};
