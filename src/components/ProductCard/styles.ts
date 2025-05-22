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
    width: 16rem;
    height: 20rem;
    min-width: 16rem;
    min-height: 20rem;
    max-width: 16rem;
    max-height: 20rem;
    box-sizing: border-box;
    &:hover {
        box-shadow: 0 0.25rem 1.5rem rgba(0,0,0,0.18);
    }
`;

export const ProductImageWrapper = styled.div`
    width: 7.5rem;
    height: 7.5rem;
    background: #fff;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    overflow: hidden;
`;

export const ProductImage = styled.img`
    max-width: 5.625rem;
    max-height: 5.625rem;
    object-fit: contain;
    display: block;
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
`;

export const ProductPrice = styled.span`
    color: ${({ theme }) => theme["purple-400"]};
    font-weight: 700;
    font-size: 1.1rem;
    margin-bottom: 1rem;
`;

export const AddToCartButton = styled.button`
    margin-top: auto;
    background: ${({ theme }) => theme["purple-400"]};
    color: #fff;
    border: none;
    border-radius: 0.375rem;
    padding: 0.5rem 1.2rem;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
    &:hover {
        background: ${({ theme }) => theme["purple-300"]};
    }
`;
