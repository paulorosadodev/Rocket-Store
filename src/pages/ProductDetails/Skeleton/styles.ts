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
    gap: 3rem;
    padding: 4rem 3rem;
    width: 100%;
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

export const SkeletonImageWrapper = styled.div`
    width: 20rem;
    height: 20rem;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
`;

export const SkeletonImage = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 8px;
    background: #222;
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

export const SkeletonTitle = styled.div`
    width: 70%;
    height: 2.2rem;
    border-radius: 8px;
    background: #222;
    margin-bottom: 1.2rem;
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

export const SkeletonDescription = styled.div`
    width: 95%;
    height: 1.1rem;
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

export const SkeletonPrice = styled.div`
    width: 30%;
    height: 1.5rem;
    border-radius: 8px;
    background: #222;
    margin: 1.2rem 0 1.5rem 0;
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

export const SkeletonActions = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 1.5rem;
`;

export const SkeletonButton = styled.div`
    height: 2.5rem;
    border-radius: 0.5rem;
    background: #222;
    width: 10rem;
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
