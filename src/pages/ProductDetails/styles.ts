import styled from "styled-components";

export const ProductDetailsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    position: relative;
    gap: 3rem;
    padding: 4rem 3rem;
    max-width: 93.75rem;
    min-width: 93.75rem;
    min-height: 30rem;
    max-height: 30rem;
    margin: 2rem auto;
    background: ${({ theme }) => theme["surface"]};
    border-radius: 16px;
    box-shadow: 0 2px 16px rgba(0,0,0,0.10);
    box-sizing: border-box;
`;

export const ProductImageWrapper = styled.div`
    width: 20rem;
    height: 20rem;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
`;

export const ProductImage = styled.img`
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    border-radius: 8px;
`;

export const ProductInfo = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

export const ProductActionsWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 2.5rem;
    position: absolute;
    bottom: 2rem;
    left: -2rem;
`;

export const ProductActions = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    position: static;
`;

export const ProductTitle = styled.h1`
    font-size: 2rem;
    color: ${({ theme }) => theme["gray-200"]};
    margin-bottom: 0.5rem;
`;

export const ProductDescription = styled.p`
    color: ${({ theme }) => theme["white-dark"]};
    font-size: 1.1rem;
    line-height: 1.6;
    max-height: 16rem; 
    overflow: auto;
`;

export const ProductPrice = styled.div`
    color: ${({ theme }) => theme["purple-400"]};
    font-size: 1.5rem;
    font-weight: 700;
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
`;
