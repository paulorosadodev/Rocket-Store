import styled from "styled-components";

export const ProductCardWrapper = styled.div`
    background: ${({ theme }) => theme["surface"]};
    border-radius: 10px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.10);
    padding: 1.5rem 1rem 1rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: box-shadow 0.2s;
    min-width: 16rem;
    min-height: 20rem;
    box-sizing: border-box;
    &:hover {
        box-shadow: 0 0.25rem 1.5rem rgba(0,0,0,0.18);
    }
    
    @media (max-width: 768px) {
        min-width: 14rem;
        min-height: 18rem;
        padding: 1.25rem 0.75rem 0.75rem 0.75rem;
    }
    
    @media (max-width: 480px) {
        min-width: 10rem;
        min-height: 16rem;
        padding: 1rem 0.5rem 0.5rem 0.5rem;
    }
`;

export const ProductTitle = styled.h3`
    font-size: 1.1rem;
    color: ${({ theme }) => theme["gray-200"]};
    margin-bottom: 0.5rem;
    text-align: center;
    min-height: 2.6rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    
    @media (max-width: 768px) {
        font-size: 1rem;
        min-height: 2.4rem;
    }
    
    @media (max-width: 480px) {
        font-size: 0.9rem;
        min-height: 2.2rem;
        margin-bottom: 0.3rem;
    }
`;

export const ProductPrice = styled.span`
    color: ${({ theme }) => theme["purple-400"]};
    font-weight: 700;
    font-size: 1.1rem;
    margin-bottom: 1rem;
    
    @media (max-width: 768px) {
        font-size: 1rem;
        margin-bottom: 0.75rem;
    }
    
    @media (max-width: 480px) {
        font-size: 0.9rem;
        margin-bottom: 0.5rem;
    }
`;

export const AddToCartButton = styled.button`
    margin-top: auto;
    background: ${({ theme }) => theme["purple-400"]};
    color: #fff;
    border: none;
    border-radius: 0.375rem;
    padding: 0.75rem;
    font-size: 1rem;
    width: 100%;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
    
    @media (max-width: 768px) {
        padding: 0.625rem;
        font-size: 0.9rem;
    }
    
    @media (max-width: 480px) {
        padding: 0.5rem;
        font-size: 0.8rem;
        border-radius: 0.25rem;
    }
    &:hover {
        background: ${({ theme }) => theme["purple-300"]};
    }
`;

export const BuyNowButton = styled.button`
    width: 100%;
    margin-bottom: 8px;
    background: ${({ theme }) => theme["green-600"]};
    color: #fff;
    font-weight: 600;
    border: none;
    border-radius: 8px;
    padding: 0.75rem 0;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.2s;
    &:hover {
        background: ${({ theme }) => theme["green-400"]};
    }
`;
