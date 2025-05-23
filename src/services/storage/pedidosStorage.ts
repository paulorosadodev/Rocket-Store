import { v4 as uuidv4 } from "uuid";
import type { Pedido, CartProduct } from "../../@types";

const PEDIDOS_KEY = "pedidos";

export function getPedidos(): Pedido[] {
    try {
        const stored = localStorage.getItem(PEDIDOS_KEY);
        return stored ? JSON.parse(stored) : [];
    } catch {
        return [];
    }
}

export function setPedidos(pedidos: Pedido[]): void {
    localStorage.setItem(PEDIDOS_KEY, JSON.stringify(pedidos));
}

export function addPedido(produtos: CartProduct[], total?: number): Pedido {
    const pedidos = getPedidos();
    const now = new Date();
    const pedido: Pedido = {
        id: uuidv4(),
        data: now.toISOString(),
        produtos,
        total: typeof total === "number" ? total : produtos.reduce((sum, p) => sum + (p.price * p.quantity), 0),
    };
    pedidos.push(pedido);
    setPedidos(pedidos);
    return pedido;
}
