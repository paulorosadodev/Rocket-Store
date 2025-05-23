import styled from "styled-components";

export const ToastWrapper = styled.div`
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    z-index: 2000;
    background: ${({ theme }) => theme["green-600"]};
    color: ${({ theme }) => theme["white"]};
    padding: 1.2rem 2.2rem;
    border-radius: 8px;
    font-size: 1.1rem;
    font-weight: 600;
    box-shadow: 0 2px 16px #0005;
    opacity: 0;
    transform: translateY(32px) scale(0.98);
    animation: toast-in 0.4s cubic-bezier(.4,1.2,.6,1) forwards, toast-out 0.4s cubic-bezier(.4,1.2,.6,1) forwards;
    animation-delay: 0s, calc(var(--toast-duration, 3s) - 0.4s);

    @keyframes toast-in {
        from {
        opacity: 0;
        transform: translateY(32px) scale(0.98);
        }
        to {
        opacity: 1;
        transform: translateY(0) scale(1);
        }
    }
    @keyframes toast-out {
        from {
        opacity: 1;
        transform: translateY(0) scale(1);
        }
        to {
        opacity: 0;
        transform: translateY(32px) scale(0.98);
        }
    }
`;
