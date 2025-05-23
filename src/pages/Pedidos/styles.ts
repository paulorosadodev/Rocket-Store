import styled from "styled-components";

export const PedidosWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem 1rem 2rem 1rem;
    min-height: 60vh;
    width: 100%;
    margin: 0 auto;
    text-align: left;
    box-sizing: border-box;
    
    @media (max-width: 992px) {
        padding: 2.5rem 1rem 2rem 1rem;
    }
    
    @media (max-width: 768px) {
        padding: 2rem 0.75rem 1.5rem 0.75rem;
    }
`;

export const Title = styled.h1`
    font-size: 2.2rem;
    font-weight: 700;
    color: ${props => props.theme["purple-300"]};
    margin-bottom: 2rem;
    margin-top: 1rem;
    margin-left: 10%;
    align-self: flex-start;
    text-align: left;
    
    @media (max-width: 992px) {
        font-size: 2rem;
        margin-left: 5%;
    }
    
    @media (max-width: 768px) {
        font-size: 1.8rem;
        margin-bottom: 1.5rem;
        align-self: center;
        margin-left: 0;
    }
    
    @media (max-width: 480px) {
        font-size: 1.6rem;
        margin-bottom: 1rem;
    }
`;

export const EmptyText = styled.p`
    color: ${props => props.theme["gray-200"]};
    font-size: 1.2rem;
    margin-top: 2rem;
    text-align: center;
    padding: 0 1rem;
    
    @media (max-width: 768px) {
        font-size: 1.1rem;
        margin-top: 1.5rem;
    }
    
    @media (max-width: 480px) {
        font-size: 1rem;
        margin-top: 1rem;
    }
`;

export const PedidoCard = styled.div`
    background: ${({ theme }) => theme["surface"]};
    border-radius: 12px;
    margin-bottom: 24px;
    padding: 24px;
    box-shadow: 0 2px 8px ${({ theme }) => theme["black"]}22;
    width: 100%;
    box-sizing: border-box;
    
    @media (max-width: 768px) {
        padding: 20px;
        margin-bottom: 16px;
    }
    
    @media (max-width: 480px) {
        padding: 16px;
        margin-bottom: 12px;
        border-radius: 8px;
    }
`;

export const PedidoHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
    
    @media (max-width: 480px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
    }
`;

export const PedidoId = styled.span`
    font-weight: 700;
    color: ${({ theme }) => theme["purple-200"]};
    
    @media (max-width: 768px) {
        font-size: 0.95rem;
    }
`;

export const PedidoDate = styled.span`
    color: ${({ theme }) => theme["gray-200"]};
    font-size: 14px;
    
    @media (max-width: 768px) {
        font-size: 13px;
    }
`;

export const PedidoProdutos = styled.div`
    max-height: 260px;
    overflow-y: auto;
    padding-right: 0.5rem;
    margin-bottom: 1rem;

    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme["purple-200"]} ${({ theme }) => theme["surface"]};

    &::-webkit-scrollbar {
        width: 8px;
        background: ${({ theme }) => theme["surface"]};
        border-radius: 8px;
    }
    &::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme["purple-200"]};
        border-radius: 8px;
    }
    &::-webkit-scrollbar-thumb:hover {
        background: ${({ theme }) => theme["purple-300"]};
    }

    @media (max-width: 600px) {
        max-height: 160px;
        padding-right: 0.25rem;
    }
`;

export const ProdutoItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    padding: 8px 0;
    
    @media (max-width: 768px) {
        flex-wrap: wrap;
        padding: 10px 0;
        border-bottom: 1px solid ${({ theme }) => theme["purple-900"] + "33"};
        
        &:last-child {
            border-bottom: none;
        }
    }
    
    @media (max-width: 480px) {
        padding: 12px 4px;
        flex-direction: column;
        align-items: flex-start;
        position: relative;
    }
`;

export const ProdutoImage = styled.img`
    width: 48px;
    height: 48px;
    object-fit: cover;
    border-radius: 8px;
    margin-right: 12px;
    
    @media (max-width: 480px) {
        width: 45px;
        height: 45px;
        margin-right: 0;
        position: absolute;
        top: 12px;
        left: 4px;
    }
`;

export const ProdutoInfo = styled.div`
    flex: 1;
    
    @media (max-width: 480px) {
        min-width: 100%;
        padding-left: 60px;
        box-sizing: border-box;
    }
`;

export const ProdutoTitle = styled.div`
    font-weight: 600;
    color: ${({ theme }) => theme["white"]};
    
    @media (max-width: 768px) {
        font-size: 0.9rem;
    }
    
    @media (max-width: 480px) {
        font-size: 0.9rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100%;
        margin-bottom: 4px;
    }
`;

export const ProdutoQtd = styled.div`
    color: ${({ theme }) => theme["gray-200"]};
    font-size: 13px;
    
    @media (max-width: 480px) {
        font-size: 0.8rem;
        display: inline-block;
    }
`;

export const ProdutoPreco = styled.div`
    color: ${({ theme }) => theme["purple-300"]};
    font-weight: 700;
    min-width: 80px;
    text-align: right;
    
    @media (max-width: 768px) {
        min-width: 70px;
        font-size: 0.95rem;
    }
    
    @media (max-width: 480px) {
        min-width: 0;
        padding-left: 60px;
        width: 100%;
        text-align: left;
        font-size: 0.95rem;
        margin-top: 4px;
    }
`;

export const PedidoFooter = styled.div`
    border-top: 1px solid ${({ theme }) => theme["purple-900"]};
    margin-top: 16px;
    padding-top: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    @media (max-width: 768px) {
        margin-top: 12px;
        padding-top: 10px;
    }
`;

export const PedidoFooterLabel = styled.span`
    color: ${({ theme }) => theme["gray-200"]};
    font-weight: 500;
    
    @media (max-width: 768px) {
        font-size: 0.95rem;
    }
`;

export const PedidoFooterTotal = styled.span`
    color: ${({ theme }) => theme["purple-200"]};
    font-weight: 700;
    font-size: 18px;
    
    @media (max-width: 768px) {
        font-size: 16px;
    }
    
    @media (max-width: 480px) {
        font-size: 15px;
    }
`;

export const PedidoListWrapper = styled.div`
    max-height: 65vh;
    overflow-y: auto;
    padding-right: 0.5rem;
    width: 80%;

    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme["purple-200"]} ${({ theme }) => theme["surface"]};

    &::-webkit-scrollbar {
        width: 8px;
        background: ${({ theme }) => theme["surface"]};
        border-radius: 8px;
    }
    &::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme["purple-200"]};
        border-radius: 8px;
    }
    &::-webkit-scrollbar-thumb:hover {
        background: ${({ theme }) => theme["purple-300"]};
    }

    @media (max-width: 600px) {
        max-height: 60vh;
        padding-right: 0.25rem;
    }
`;

export const ProdutoLink = styled.a`
    display: flex;
    align-items: center;
    text-decoration: none;
    margin-right: 12px;
    
    @media (max-width: 480px) {
        display: inline-flex;
        margin-right: 0;
        position: absolute;
    }
`;

export const ProdutoTitleLink = styled.a`
    text-decoration: none;
    display: block;
    width: 100%;

    &:hover {
        text-decoration: underline;
        color: ${({ theme }) => theme["white"]};
    }
    
    @media (max-width: 480px) {
        width: 100%;
        display: block;
        max-width: 100%;
    }
`;
