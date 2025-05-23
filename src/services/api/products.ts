import { api } from ".";

import type { Product } from "../../@types";

export async function fetchProducts(): Promise<Product[]> {
    const response = await api.get<Product[]>("products/");
    return response.data;
}

export async function fetchProductById(id: number): Promise<Product> {
    const response = await api.get<Product>(`products/${id}`);
    return response.data;
}
