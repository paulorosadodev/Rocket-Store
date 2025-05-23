export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}
export interface CartProduct {
    id: number;
    title: string;
    price: number;
    image: string;
    quantity: number;
}
export interface Pedido {
    id: string; 
    data: string; 
    produtos: CartProduct[];
    total: number;
}
