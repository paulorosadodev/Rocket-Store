import styled, { keyframes } from "styled-components";

export const CartModalWrapper = styled.div`
    position: absolute;
    top: 48px;
    right: 0;
    z-index: 1100;
    width: 360px;
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
    top: 18px;
    right: 24px;
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
