import axios from "axios";
import type { Product } from "../@types";

export async function fetchProducts(): Promise<Product[]> {
    const response = await axios.get<Product[]>(
        "https://fakestoreapi.com/products/"
    );
    return response.data;
}

export async function fetchProductById(id: number): Promise<Product> {
    const response = await axios.get<Product>(
        `https://fakestoreapi.com/products/${id}`
    );
    return response.data;
}
