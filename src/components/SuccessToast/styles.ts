import styled, { keyframes } from "styled-components";
import { CheckCircleIcon } from "@phosphor-icons/react";

const fadeInOut = keyframes`
    0% { opacity: 0; transform: translateY(20px) scale(0.98); }
    10% { opacity: 1; transform: translateY(0) scale(1); }
    90% { opacity: 1; transform: translateY(0) scale(1); }
    100% { opacity: 0; transform: translateY(20px) scale(0.98); }
`;

export const ToastIcon = styled(CheckCircleIcon)<{ $variant?: "success" | "cart" }>`
    flex-shrink: 0;
    height: 2rem;
    width: 2rem;
    font-weight: bold;
    color: ${({ $variant, theme }) =>
        $variant === "cart"
            ? (theme["purple-300"])
            : (theme["green-600"])
};
`;

export const ToastWrapper = styled.div<{
    $variant?: "success" | "cart";
}>`
    min-width: 220px;
    max-width: 90vw;
    padding: 1rem 2rem;
    border-radius: 8px;
    color: #fff;
    font-weight: 600;
    font-size: 1.1rem;
    box-shadow: 2px 2px 16px rgba(0, 0, 0, 0.18);
    position: fixed;
    bottom: 2.5rem;
    right: 2.5rem;
    left: auto;
    transform: none;
    z-index: 9999;
    animation: ${fadeInOut} var(--toast-duration, 3000ms) cubic-bezier(0.4, 1.2, 0.6, 1);
    background: ${({ theme }) => theme["purple-800"]};
    display: flex;
    align-items: center;
    gap: 0.5rem;

    @media (max-width: 600px) {
        right: 0;
        left: 0;
        transform: none;
        margin: 0 auto;
        bottom: 1.5rem;
        min-width: 0;
        max-width: 96vw;
        width: 96vw;
        padding: 0.75rem 0.5rem;
        font-size: 1rem;
        border-radius: 6px;
        text-align: center;
        justify-content: center;
    }
`;
