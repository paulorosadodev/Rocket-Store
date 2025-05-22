import { createContext, useState } from "react";
import type { ReactNode } from "react";

interface CartContextType {
    cartCount: number;
    incrementCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [cartCount, setCartCount] = useState(0);

    function incrementCart() {
        setCartCount((prev) => prev + 1);
    }

    return (
        <CartContext.Provider value={{ cartCount, incrementCart }}>
            {children}
        </CartContext.Provider>
    );
}

export {CartContext};
