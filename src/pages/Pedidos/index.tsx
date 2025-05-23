import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import type { Pedido } from "../../@types";

import * as S from "./styles";

import { getPedidos } from "../../services/storage/pedidosStorage";
import { getPedidosUpdateCounter } from "../../services/storage/pedidosUpdateService";

import { useWindowSize } from "../../hooks/useWindowSize";

import { formatDate } from "../../utils/formatDate";
import { formatPrice } from "../../utils/formatPrice";

export default function Pedidos() {

    const { isMobile } = useWindowSize();

    const [pedidos, setPedidos] = useState<Pedido[]>([]);
    const [updateCounter, setUpdateCounter] = useState(0);

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
            <S.PedidoCard key={pedido.id}>
                <S.PedidoHeader>
                    <S.PedidoId>Pedido #{pedidoIdShort}</S.PedidoId>
                    <S.PedidoDate>{formatDate(pedido.data)}</S.PedidoDate>
                </S.PedidoHeader>
                <S.PedidoProdutos>
                    {pedido.produtos.map(prod => (
                        <S.ProdutoItem key={prod.id}>
                            <S.ProdutoLink as={Link} to={`/produto/${prod.id}`}>
                                <S.ProdutoImage src={prod.image} alt={prod.title} />
                            </S.ProdutoLink>
                            <S.ProdutoInfo>
                                <S.ProdutoTitleLink as={Link} to={`/produto/${prod.id}`}>
                                    <S.ProdutoTitle>
                                        {isMobile && prod.title.length > 30 
                                            ? `${prod.title.substring(0, 30)}...` 
                                            : prod.title}
                                    </S.ProdutoTitle>
                                </S.ProdutoTitleLink>
                                <S.ProdutoQtd>
                                    {isMobile ? `${prod.quantity}x` : `Qtd: ${prod.quantity}`}
                                </S.ProdutoQtd>
                            </S.ProdutoInfo>
                            <S.ProdutoPreco>
                                {isMobile && `${prod.quantity}x `}
                                {formatPrice(prod.price * prod.quantity)}
                            </S.ProdutoPreco>
                        </S.ProdutoItem>
                    ))}
                </S.PedidoProdutos>
                <S.PedidoFooter>
                    <S.PedidoFooterLabel>Total:</S.PedidoFooterLabel>
                    <S.PedidoFooterTotal>{formatPrice(pedido.total)}</S.PedidoFooterTotal>
                </S.PedidoFooter>
            </S.PedidoCard>
        );
    };

    return (
        <S.PedidosWrapper>
            <S.Title>Meus Pedidos</S.Title>
            {pedidos.length === 0 ? (
                <S.EmptyText>Você ainda não fez nenhum pedido</S.EmptyText>
            ) : (
                <S.PedidoListWrapper>
                    {pedidos.map(renderPedido)}
                </S.PedidoListWrapper>
            )}
        </S.PedidosWrapper>
    );

}
