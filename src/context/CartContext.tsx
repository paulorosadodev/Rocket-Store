import { createContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

export interface CartProduct {
    id: number;
    title: string;
    price: number;
    image: string;
    quantity: number;
}

interface CartContextType {
    cart: CartProduct[];
    cartCount: number;
    incrementCart: (product: CartProduct) => void;
    removeFromCart: (id: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [cart, setCart] = useState<CartProduct[]>(() => {
        const stored = localStorage.getItem("cart");
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

    function incrementCart(product: CartProduct) {
        setCart((prev) => {
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
        setCart((prev) => prev.filter((p) => p.id !== id));
    }

    return (
        <CartContext.Provider value={{ cart, cartCount, incrementCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
}

export {CartContext};
