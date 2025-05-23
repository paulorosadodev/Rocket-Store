import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
    0% {
        background-position: -400px 0;
    }
    100% {
        background-position: 400px 0;
    }
`;

export const SkeletonDetailsWrapper = styled.div`
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

export const SkeletonContentContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    min-width: 0; 
    max-width: 100%;
    box-sizing: border-box;
    position: relative;
    
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

export const SkeletonTitle = styled.div`
    width: 70%;
    height: 2.2rem;
    border-radius: 8px;
    background: #222;
    margin-bottom: 1.2rem;
    position: relative;
    overflow: hidden;
    
    @media (max-width: 768px) {
        width: 80%;
        height: 2rem;
        margin: 0 auto 1rem auto;
    }
    
    @media (max-width: 480px) {
        width: 90%;
        height: 1.8rem;
    }
    
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
`;

export const SkeletonDescription = styled.div`
    width: 95%;
    height: 1.1rem;
    border-radius: 6px;
    background: #222;
    margin-bottom: 0.7rem;
    position: relative;
    overflow: hidden;
    
    &:last-of-type {
        margin-bottom: 1.5rem;
    }
    
    @media (max-width: 768px) {
        width: 90%;
        height: 1rem;
        margin: 0 auto 0.7rem auto;
        text-align: center;
    }
    
    @media (max-width: 480px) {
        width: 85%;
        height: 0.9rem;
        margin-bottom: 0.6rem;
    }
    
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
`;

export const SkeletonPrice = styled.div`
    width: 30%;
    height: 1.5rem;
    border-radius: 8px;
    background: #6d4cba; /* Using purple-400 color similar to the real component */
    margin: 1.2rem 0 1.5rem 0;
    position: relative;
    overflow: hidden;
    
    @media (max-width: 768px) {
        width: 40%;
        height: 1.5rem;
        margin: 1.5rem auto 1.5rem auto;
        text-align: center;
    }
    
    @media (max-width: 480px) {
        width: 50%;
        height: 1.3rem;
    }
    
    &::after {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, #6d4cba 0%, #8561d8 50%, #6d4cba 100%);
        background-size: 400px 100%;
        animation: ${shimmer} 1.2s infinite linear;
        position: absolute;
        top: 0;
        left: 0;
    }
`;

export const SkeletonActionsWrapper = styled.div`
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

export const SkeletonActions = styled.div`
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

export const SkeletonButton = styled.div`
    height: 2.5rem;
    border-radius: 0.5rem;
    position: relative;
    overflow: hidden;
    
    @media (max-width: 768px) {
        height: 2.3rem;
    }
    
    @media (max-width: 480px) {
        width: 100%;
        height: 2.5rem;
    }
    
    &::after {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        background-size: 400px 100%;
        animation: ${shimmer} 1.2s infinite linear;
        position: absolute;
        top: 0;
        left: 0;
    }
`;

export const SkeletonBuyButton = styled(SkeletonButton)`
    background: #2a806e;
    width: 9rem;
    
    &::after {
        background: linear-gradient(90deg, #2a806e, #35a188, #2a806e);
    }
    
    @media (max-width: 768px) {
        width: 9rem;
        padding: 0.75rem 1.75rem;
    }
    
    @media (max-width: 480px) {
        width: 100%;
        padding: 1rem;
        order: 1;
    }
`;

export const SkeletonAddToCartButton = styled(SkeletonButton)`
    background: #4c3792;
    width: 13rem;
    
    &::after {
        background: linear-gradient(90deg, #4c3792 0%, #5c44a8 50%, #4c3792 100%);
    }
    
    @media (max-width: 768px) {
        width: 13rem;
        padding: 0.75rem 1.75rem;
    }
    
    @media (max-width: 480px) {
        width: 100%;
        padding: 1rem;
        order: 2;
    }
`;
