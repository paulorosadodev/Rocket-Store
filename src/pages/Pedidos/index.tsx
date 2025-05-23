import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { PedidosWrapper, Title, EmptyText, PedidoCard, PedidoHeader, PedidoId, PedidoDate, PedidoProdutos, ProdutoItem, ProdutoInfo, ProdutoTitle, ProdutoQtd, ProdutoPreco, PedidoFooter, PedidoFooterLabel, PedidoFooterTotal, PedidoListWrapper, ProdutoLink, ProdutoTitleLink, ProdutoImage } from "./styles";

import { getPedidos } from "../../services/storage/pedidosStorage";
import { getPedidosUpdateCounter } from "../../services/storage/pedidosUpdateService";
import { useWindowSize } from "../../hooks/useWindowSize";

import type { Pedido } from "../../@types";

function formatDate(dateStr: string) {
    const d = new Date(dateStr);
    return d.toLocaleString("pt-BR", { dateStyle: "short", timeStyle: "short" });
}

export default function Pedidos() {

    const [pedidos, setPedidos] = useState<Pedido[]>([]);
    const [updateCounter, setUpdateCounter] = useState(0);
    const { isMobile } = useWindowSize();

    useEffect(() => {
        const intervalId = setInterval(() => {
            const currentCounter = getPedidosUpdateCounter();
            if (currentCounter > updateCounter) {
                setUpdateCounter(currentCounter);
            }
        }, 1000);

        return () => clearInterval(intervalId);
    }, [updateCounter]);

    useEffect(() => {
        const pedidos = getPedidos();
        setPedidos(pedidos.reverse()); 
    }, [updateCounter]); 

    const renderPedido = (pedido: Pedido) => {
        const pedidoIdShort = isMobile ? pedido.id.slice(0, 6) : pedido.id.slice(0, 8);
        
        return (
            <PedidoCard key={pedido.id}>
                <PedidoHeader>
                    <PedidoId>Pedido #{pedidoIdShort}</PedidoId>
                    <PedidoDate>{formatDate(pedido.data)}</PedidoDate>
                </PedidoHeader>
                <PedidoProdutos>
                    {pedido.produtos.map(prod => (
                        <ProdutoItem key={prod.id}>
                            <ProdutoLink as={Link} to={`/produto/${prod.id}`}>
                                <ProdutoImage src={prod.image} alt={prod.title} />
                            </ProdutoLink>
                            <ProdutoInfo>
                                <ProdutoTitleLink as={Link} to={`/produto/${prod.id}`}>
                                    <ProdutoTitle>
                                        {isMobile && prod.title.length > 30 
                                            ? `${prod.title.substring(0, 30)}...` 
                                            : prod.title}
                                    </ProdutoTitle>
                                </ProdutoTitleLink>
                                <ProdutoQtd>
                                    {isMobile ? `${prod.quantity}x` : `Qtd: ${prod.quantity}`}
                                </ProdutoQtd>
                            </ProdutoInfo>
                            <ProdutoPreco>
                                {isMobile && `${prod.quantity}x `}
                                R$ {(prod.price * prod.quantity).toFixed(2)}
                            </ProdutoPreco>
                        </ProdutoItem>
                    ))}
                </PedidoProdutos>
                <PedidoFooter>
                    <PedidoFooterLabel>Total:</PedidoFooterLabel>
                    <PedidoFooterTotal>R$ {pedido.total.toFixed(2)}</PedidoFooterTotal>
                </PedidoFooter>
            </PedidoCard>
        );
    };

    return (
        <PedidosWrapper>
            <Title>Meus Pedidos</Title>
            {pedidos.length === 0 ? (
                <EmptyText>Você ainda não fez nenhum pedido.</EmptyText>
            ) : (
                <PedidoListWrapper>
                    {pedidos.map(renderPedido)}
                </PedidoListWrapper>
            )}
        </PedidosWrapper>
    );
}
