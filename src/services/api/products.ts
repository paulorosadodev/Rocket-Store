import { api } from ".";
import type { Product } from "../../@types";

export async function fetchProducts(): Promise<Product[]> {
    try {
        const response = await api.get<Product[]>("products/");
        return response.data;
    } catch (error: any) {
        throw new Error(error.message);
    }
}

export async function fetchProductById(id: number): Promise<Product> {
    try {
        const response = await api.get<Product>(`products/${id}`);
        return response.data;
    } catch (error: any) {
        throw new Error(error.message);
    }
}
