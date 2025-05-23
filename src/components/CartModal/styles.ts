import styled, { keyframes } from "styled-components";

export const MobileOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: 1000;
`;

export const CartModalWrapper = styled.div<{ isMobile?: boolean }>`
    position: ${props => props.isMobile ? "fixed" : "absolute"};
    top: ${props => props.isMobile ? "0" : "3rem"};
    right: ${props => props.isMobile ? "0" : "0"};
    bottom: ${props => props.isMobile ? "0" : "auto"};
    left: ${props => props.isMobile ? "0" : "auto"};
    z-index: 1100;
    width: ${props => props.isMobile ? "100%" : "25rem"};
    max-width: ${props => props.isMobile ? "100vw" : "90vw"};
    display: flex;
    justify-content: ${props => props.isMobile ? "center" : "flex-end"};
    align-items: ${props => props.isMobile ? "center" : "flex-start"};
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

export const ModalContent = styled.div<{ isMobile?: boolean }>`
    background: linear-gradient(135deg, ${({ theme }) => theme["black"]} 0%, ${({ theme }) => theme["purple-800"]} 100%);
    color: ${({ theme }) => theme["gray-200"]};
    border-radius: ${props => props.isMobile ? "0" : "12px"};
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.10);
    padding: ${props => props.isMobile ? "1.5rem 1.5rem 1rem 1.5rem" : "2rem 2.5rem 1.5rem 2.5rem"};
    animation: ${fadeIn} 0.3s cubic-bezier(.4,1.2,.6,1) both;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    width: 100%;
    max-width: ${props => props.isMobile ? "100%" : "32rem"};
    height: ${props => props.isMobile ? "100vh" : "auto"};
    max-height: ${props => props.isMobile ? "100vh" : "50vh"};
    overflow-y: auto;
`;

export const ModalTitle = styled.h2<{ isMobile?: boolean }>`
    font-size: ${props => props.isMobile ? "1.75rem" : "1.5rem"};
    font-weight: 700;
    margin-bottom: ${props => props.isMobile ? "2rem" : "1.5rem"};
    color: ${({ theme }) => theme["purple-300"]};
    ${props => props.isMobile && `
        align-self: center;
    `}
`;

export const ModalClose = styled.button<{ isMobile?: boolean }>`
    position: absolute;
    top: ${props => props.isMobile ? "1.5rem" : "1.125rem"};
    right: ${props => props.isMobile ? "1.5rem" : "1.5rem"};
    background: none;
    border: none;
    font-size: ${props => props.isMobile ? "2rem" : "1.5rem"};
    color: ${({ theme }) => theme["gray-200"]};
    cursor: pointer;
    transition: color 0.2s;
    ${props => props.isMobile && `
        padding: 0.5rem;
        z-index: 10;
    `}
    &:hover {
        color: ${({ theme }) => theme["purple-300"]};
    }
`;

export const CartList = styled.ul<{ isMobile?: boolean }>`
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
    max-height: ${props => props.isMobile ? "calc(100vh - 15rem)" : "25vh"};
    overflow-y: auto;
    padding-right: 1rem;
    
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
`;

export const CartListItem = styled.li<{ isMobile?: boolean }>`
    display: flex;
    align-items: center;
    margin-bottom: ${props => props.isMobile ? "1.5rem" : "1rem"};
    gap: ${props => props.isMobile ? "1rem" : "0.75rem"};
    ${props => props.isMobile && `
        border-bottom: 1px solid ${props.theme["purple-900"]};
        padding-bottom: 1.5rem;
        &:last-child {
            border-bottom: none;
        }
    `}
`;

export const CartItemInfo = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
`;

export const CartItemTitle = styled.div`
    color: ${({ theme }) => theme["white"]};
    font-weight: 600;
    font-size: 0.9375rem;
`;

export const CartItemQuantity = styled.div`
    color: ${({ theme }) => theme["gray-200"]};
    font-size: 0.8125rem;
`;

export const CartItemPrice = styled.div`
    color: ${({ theme }) => theme["purple-200"]};
    font-weight: 700;
    font-size: 0.875rem;
`;

export const RemoveButton = styled.button`
    background: none;
    border: none;
    color: ${({ theme }) => theme["red-500"]};
    font-size: 1.125rem;
    cursor: pointer;
    margin-left: 0.5rem;
`;

export const EmptyCartText = styled.p<{ isMobile?: boolean }>`
    color: ${({ theme }) => theme["gray-200"]};
    margin: ${props => props.isMobile ? "3rem 0" : "1rem 0"};
    width: 100%;
    text-align: center;
    font-size: ${props => props.isMobile ? "1.125rem" : "1rem"};
`;

export const CartActionsWrapper = styled.div<{ isMobile?: boolean }>`
    width: 100%;
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    ${props => props.isMobile && `
        margin-top: auto;
        padding-top: 1rem;
        border-top: 1px solid ${props.theme["purple-900"]};
    `}
`;

export const CartTotalRow = styled.div<{ isMobile?: boolean }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
    font-size: ${props => props.isMobile ? "1.3rem" : "1.1rem"};
    ${props => props.isMobile && `
        padding: 0.75rem 0;
        margin-bottom: 0.75rem;
    `}
`;

export const CartButtonsRow = styled.div<{ isMobile?: boolean }>`
    display: flex;
    gap: 0.75rem;
    width: 100%;
    
    ${props => props.isMobile && `
        flex-direction: column;
        gap: 1rem;
    `}
`;

export const ClearButton = styled.button<{ isMobile?: boolean }>`
    flex: ${props => props.isMobile ? "1" : "1"};
    background: ${({ theme }) => theme["red-400"]};
    color: #fff;
    border: none;
    border-radius: 8px;
    padding: ${props => props.isMobile ? "1rem 0" : "0.75rem 0"};
    font-weight: 600;
    font-size: ${props => props.isMobile ? "1.125rem" : "1rem"};
    cursor: pointer;
    transition: background 0.2s;
    ${props => props.isMobile && `
        order: 2;
    `}
    &:hover {
        background: ${({ theme }) => theme["red-500"]};
    }
`;

export const CheckoutButton = styled.button<{ isMobile?: boolean }>`
    flex: ${props => props.isMobile ? "1" : "2"};
    background: ${({ theme }) => theme["green-600"]};
    color: #fff;
    border: none;
    border-radius: 8px;
    padding: ${props => props.isMobile ? "1.25rem 0" : "0.75rem 0"};
    font-weight: 600;
    font-size: ${props => props.isMobile ? "1.25rem" : "1rem"};
    cursor: pointer;
    transition: background 0.2s;
    ${props => props.isMobile && `
        order: 1;
        margin-bottom: 0.5rem;
    `}
    &:hover {
        background: ${({ theme }) => theme["green-400"]};
    }
`;

export const QuantityButton = styled.button<{ isMobile?: boolean }>`
    background: none;
    border: none;
    color: ${({ theme }) => theme["purple-400"]};
    font-weight: 700;
    font-size: ${props => props.isMobile ? "1.5rem" : "1.125rem"};
    cursor: pointer;
    padding: ${props => props.isMobile ? "0 0.75rem" : "0 0.5rem"};
    transition: color 0.2s;
    ${props => props.isMobile && `
        min-width: 2.5rem;
        height: 2.5rem;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    `}
    &:hover {
        color: ${({ theme }) => theme["purple-300"]};
    }
`;
