import styled from "styled-components";

export const ProductDetailsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    position: relative;
    gap: 3rem;
    padding: 4rem 3rem;
    width: 90%;
    max-width: 93.75rem;
    min-height: 30rem;
    max-height: none;
    margin: 2rem auto;
    background: ${({ theme }) => theme["surface"]};
    border-radius: 16px;
    box-shadow: 0 2px 16px rgba(0,0,0,0.10);
    box-sizing: border-box;
    
    @media (max-width: 1200px) {
        width: 95%;
        gap: 2.5rem;
        padding: 3.5rem 2.5rem;
    }
    
    @media (max-width: 992px) {
        padding: 3rem 2rem;
        gap: 2rem;
    }
    
    @media (max-width: 768px) {
        flex-direction: column;
        width: 90%;
        min-height: auto;
        padding: 2.5rem 2rem;
        gap: 2rem;
        align-items: center;
    }
    
    @media (max-width: 480px) {
        width: 95%;
        padding: 2rem 1.5rem;
        margin: 1rem auto;
        gap: 1.5rem;
    }
`;

export const ProductInfo = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    min-width: 0; /* Importante para evitar overflow */
    max-width: 100%;
    box-sizing: border-box;
    
    @media (max-width: 992px) {
        padding-bottom: 2rem;
    }
    
    @media (max-width: 768px) {
        width: 100%;
        gap: 1.25rem;
        padding-bottom: 1rem;
    }
    
    @media (max-width: 480px) {
        gap: 1rem;
    }
`;

export const ProductActionsWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 2.5rem;
    position: relative;
    
    @media (min-width: 992px) {
        position: absolute;
        bottom: 2rem;
        left: -2rem;
    }
    
    @media (max-width: 992px) {
        position: static;
        margin-top: 2rem;
    }
    
    @media (max-width: 768px) {
        position: static;
        margin-top: 1.5rem;
        justify-content: center;
    }
    
    @media (max-width: 480px) {
        margin-top: 1rem;
    }
`;

export const ProductActions = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    position: static;
    max-width: 100%;
    
    @media (max-width: 992px) {
        width: 100%;
        justify-content: flex-end;
    }
    
    @media (max-width: 768px) {
        justify-content: center;
    }
    
    @media (max-width: 480px) {
        flex-direction: column;
        width: 100%;
        gap: 0.75rem;
    }
`;

export const ProductTitle = styled.h1`
    font-size: 2rem;
    color: ${({ theme }) => theme["gray-200"]};
    margin-bottom: 0.5rem;
    word-wrap: break-word;
    width: 100%;
    
    @media (max-width: 992px) {
        font-size: 1.85rem;
    }
    
    @media (max-width: 768px) {
        font-size: 1.75rem;
        text-align: center;
    }
    
    @media (max-width: 480px) {
        font-size: 1.5rem;
    }
`;

export const ProductDescription = styled.p`
    color: ${({ theme }) => theme["white-dark"]};
    font-size: 1.1rem;
    line-height: 1.6;
    max-height: 16rem; 
    overflow-y: auto;
    width: 100%;
    word-wrap: break-word;
    
    /* Estiliza a barra de rolagem para navegadores baseados em WebKit */
    &::-webkit-scrollbar {
        width: 6px;
        background: ${({ theme }) => theme["surface"]};
        border-radius: 4px;
    }
    
    &::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme["purple-200"]};
        border-radius: 4px;
    }
    
    /* Para Firefox */
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme["purple-200"]} ${({ theme }) => theme["surface"]};
    
    @media (max-width: 992px) {
        max-height: 14rem;
    }
    
    @media (max-width: 768px) {
        max-height: 12rem;
        font-size: 1rem;
        text-align: center;
    }
    
    @media (max-width: 480px) {
        max-height: 10rem;
        font-size: 0.95rem;
        line-height: 1.5;
    }
`;

export const ProductPrice = styled.div`
    color: ${({ theme }) => theme["purple-400"]};
    font-size: 1.5rem;
    font-weight: 700;
    
    @media (max-width: 768px) {
        text-align: center;
        font-size: 1.75rem;
        margin: 0.5rem 0;
    }
    
    @media (max-width: 480px) {
        font-size: 1.5rem;
    }
`;

export const BuyButton = styled.button`
    background: ${({ theme }) => theme["green-600"]};
    color: #fff;
    border: none;
    border-radius: 0.5rem;
    padding: 0.75rem 2rem;
    font-size: 1.1rem;
    font-weight: 700;
    cursor: pointer;
    transition: background 0.2s;
    &:hover {
        background: ${({ theme }) => theme["green-400"]};
    }
    
    @media (max-width: 768px) {
        padding: 0.75rem 1.75rem;
    }
    
    @media (max-width: 480px) {
        width: 100%;
        padding: 1rem;
        font-size: 1.2rem;
        order: 1;
    }
`;

export const AddToCartButton = styled.button`
    background: ${({ theme }) => theme["purple-400"]};
    color: #fff;
    border: none;
    border-radius: 0.5rem;
    padding: 0.75rem 2rem;
    font-size: 1.1rem;
    font-weight: 700;
    cursor: pointer;
    transition: background 0.2s;
    &:hover {
        background: ${({ theme }) => theme["purple-300"]};
    }
    
    @media (max-width: 768px) {
        padding: 0.75rem 1.75rem;
    }
    
    @media (max-width: 480px) {
        width: 100%;
        padding: 1rem;
        font-size: 1.2rem;
        order: 2;
    }
`;

export const ProductNotFoundWrapper = styled.div`
    margin-top: 8rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
    width: 100%;
    box-sizing: border-box;

    img {
        width: 30rem;
        max-width: 90%;
    }
    
    h1 {
        margin-top: 2rem;
        text-align: center;
    }
    
    @media (max-width: 768px) {
        margin-top: 5rem;
        
        img {
            width: 20rem;
        }
        
        h1 {
            font-size: 1.5rem;
        }
    }
    
    @media (max-width: 480px) {
        margin-top: 3rem;
        
        img {
            width: 15rem;
        }
        
        h1 {
            font-size: 1.25rem;
        }
    }
`;