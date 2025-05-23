import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
    0% {
        background-position: -400px 0;
    }
    100% {
        background-position: 400px 0;
    }
`;

export const SkeletonCardWrapper = styled.div`
    background: ${({ theme }) => theme["surface"]};
    border-radius: 10px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.10);
    padding: 1.5rem 1rem 1rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 16rem;
    min-height: 20rem;
    box-sizing: border-box;
    transition: box-shadow 0.2s;
    
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

export const SkeletonLine = styled.div<{ width?: string, height?: string }>`
    width: ${({ width }) => width || "80%"};
    height: ${({ height }) => height || "1.2rem"};
    border-radius: 6px;
    background: #222;
    margin-bottom: 0.7rem;
    position: relative;
    overflow: hidden;
    &::after {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, #222 0%, #333 50%, #222 100%);
        background-size: 400px 100%;
        animation: ${shimmer} 1.2s infinite linear;
        position: absolute;
        top: 0;
        left: 0;
    }
    
    @media (max-width: 768px) {
        margin-bottom: 0.6rem;
        height: ${({ height }) => height ? `calc(${height} - 0.1rem)` : "1.1rem"};
    }
    
    @media (max-width: 480px) {
        margin-bottom: 0.5rem;
        height: ${({ height }) => height ? `calc(${height} - 0.2rem)` : "1rem"};
    }
`;

export const SkeletonTitle = styled(SkeletonLine)`
    width: 90%;
    min-height: 2.6rem;
    height: auto;
    margin-bottom: 0.5rem;
    
    @media (max-width: 768px) {
        min-height: 2.4rem;
    }
    
    @media (max-width: 480px) {
        min-height: 2.2rem;
        margin-bottom: 0.3rem;
    }
`;

export const SkeletonPrice = styled(SkeletonLine)`
    width: 40%;
    height: 1.1rem;
    margin-bottom: 1rem;
    
    @media (max-width: 768px) {
        height: 1rem;
        margin-bottom: 0.75rem;
    }
    
    @media (max-width: 480px) {
        height: 0.9rem;
        margin-bottom: 0.5rem;
    }
`;

export const SkeletonButton = styled.div`
    width: 100%;
    height: 2.5rem;
    border-radius: 0.375rem;
    background: #4c3792; 
    margin-bottom: 0.5rem;
    position: relative;
    overflow: hidden;
    &::after {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, #4c3792 0%, #5c44a8 50%, #4c3792 100%);
        background-size: 400px 100%;
        animation: ${shimmer} 1.2s infinite linear;
        position: absolute;
        top: 0;
        left: 0;
    }
    
    @media (max-width: 768px) {
        height: 2.25rem;
        padding: 0.625rem;
        font-size: 0.9rem;
    }
    
    @media (max-width: 480px) {
        height: 2rem;
        padding: 0.5rem;
        font-size: 0.8rem;
        border-radius: 0.25rem;
    }
`;

export const SkeletonAddToCartButton = styled(SkeletonButton)`
    margin-bottom: 0;
`;

export const SkeletonBuyNowButton = styled.div`
    width: 100%;
    height: 2.5rem;
    border-radius: 8px;
    background: #2a806e; 
    margin-bottom: 8px;
    position: relative;
    overflow: hidden;
    
    &::after {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, #2a806e, #35a188, #2a806e);
        background-size: 400px 100%;
        animation: ${shimmer} 1.2s infinite linear;
        position: absolute;
        top: 0;
        left: 0;
    }
    
    @media (max-width: 768px) {
        height: 2.25rem;
        margin-bottom: 6px;
    }
    
    @media (max-width: 480px) {
        height: 2rem;
        margin-bottom: 5px;
    }
`;

export const SkeletonButtonsContainer = styled.div`
    margin-top: auto;
    width: 100%;
`;
