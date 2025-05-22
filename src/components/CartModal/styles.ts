import styled, { keyframes } from "styled-components";

export const CartModalWrapper = styled.div`
    position: absolute;
    top: 3rem;
    right: 0;
    z-index: 1100;
    width: 22.5rem;
    max-width: 90vw;
`;

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(-16px) scale(0.98);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`;

export const ModalContent = styled.div`
    background: ${({ theme }) => theme["surface"]};
    color: ${({ theme }) => theme["gray-200"]};
    border-radius: 12px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.10);
    padding: 2rem 2.5rem 1.5rem 2.5rem;
    animation: ${fadeIn} 0.3s cubic-bezier(.4,1.2,.6,1) both;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
`;

export const ModalTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme["purple-400"]};
`;

export const ModalClose = styled.button`
    position: absolute;
    top: 1.125rem;
    right: 1.5rem;
    background: none;
    border: none;
    font-size: 1.5rem;
    color: ${({ theme }) => theme["gray-200"]};
    cursor: pointer;
    transition: color 0.2s;
    &:hover {
        color: ${({ theme }) => theme["purple-300"]};
    }
`;

export const CartList = styled.ul`
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
`;

export const CartListItem = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
`;

export const CartItemImage = styled.img`
    width: 3rem;
    height: 3rem;
    object-fit: contain;
    margin-right: 0.75rem;
    border-radius: 6px;
    background: #222;
`;

export const CartItemInfo = styled.div`
    flex: 1;
`;

export const CartItemTitle = styled.div`
    color: #fff;
    font-weight: 600;
    font-size: 0.9375rem;
`;

export const CartItemQuantity = styled.div`
    color: #aaa;
    font-size: 0.8125rem;
`;

export const CartItemPrice = styled.div`
    color: #b9a8ea;
    font-weight: 700;
    font-size: 0.875rem;
`;

export const RemoveButton = styled.button`
    background: none;
    border: none;
    color: #d64550;
    font-size: 1.125rem;
    cursor: pointer;
    margin-left: 0.5rem;
`;

export const EmptyCartText = styled.p`
    color: #aaa;
    margin: 1rem 0;
`;
