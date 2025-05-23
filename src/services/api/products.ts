import { api } from ".";
import { endpoints } from "./endpoints";
import type { Product } from "../../@types";

export async function fetchProducts(): Promise<Product[]> {
    const response = await api.get<Product[]>(endpoints.products);
    return response.data;
}

export async function fetchProductById(id: number): Promise<Product> {
    const response = await api.get<Product>(endpoints.productById(id));
    return response.data;
}
