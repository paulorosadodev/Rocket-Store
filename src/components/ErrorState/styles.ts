import styled from "styled-components";

export const ErrorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 4rem auto 0 auto;
    padding: 2rem 1rem;
    background: ${({ theme }) => theme["surface"]};
    border-radius: 16px;
    box-shadow: 0 2px 16px rgba(0,0,0,0.10);
    width: 95vw;
    text-align: center;
    
    img {
        width: 10rem;
        max-width: 80vw;
        margin-bottom: 1.5rem;
    }
    
    @media (max-width: 600px) {
        padding: 1.5rem 0.5rem;
        border-radius: 10px;
        margin: 2rem auto 0 auto;
        img {
            width: 7rem;
        }
        h2 {
            font-size: 1.1rem;
        }
    }
`;

export const RetryButton = styled.button`
    background: ${({ theme }) => theme["purple-400"]};
    color: #fff;
    border: none;
    border-radius: 8px;
    padding: 0.75rem 2rem;
    font-size: 1.1rem;
    font-weight: 700;
    cursor: pointer;
    transition: background 0.2s;
    &:hover {
        background: ${({ theme }) => theme["purple-300"]};
    }
`;

export const ErrorMessage = styled.p`
    color: ${({ theme }) => theme["gray-500"]};
    margin: 0.5rem 0 1.5rem 0;
    word-break: break-word;
`;
