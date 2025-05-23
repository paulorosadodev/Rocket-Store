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
    width: 16rem;
    height: 20rem;
    min-width: 16rem;
    min-height: 20rem;
    max-width: 16rem;
    max-height: 20rem;
    box-sizing: border-box;
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
`;

export const SkeletonButton = styled.div`
    width: 100%;
    height: 2.5rem;
    border-radius: 8px;
    background: #222;
    margin-bottom: 0.5rem;
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
`;
