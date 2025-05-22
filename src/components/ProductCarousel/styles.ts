import styled from "styled-components";

export const CarouselWrapper = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4rem;

    &:last-child {
        margin-bottom: 4rem;
    }
`;

export const CarouselTitle = styled.h2`
    color: ${({ theme }) => theme["gray-200"]};
    font-size: 1.6rem;
    font-weight: 700;
    margin-bottom: 1rem;
    width: 100%;
    text-align: left;
`;

export const CarouselContainer = styled.div`
    max-width: 75vw;
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    `;

export const CarouselInner = styled.div`
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
        display: none;
    }
    width: 100%;
`;

export const CarouselItem = styled.div`
    margin: 10px;
    padding: 10px 0;
    width: 16rem;
    border-radius: 16px;
    flex: none;
    display: flex;
    justify-content: center;
    align-items: stretch;
`;

export const CarouselButton = styled.button`
    background-color: ${({ theme }) => theme["purple-200"]};
    border: none;
    cursor: pointer;
    margin: 0 0.5rem;
    padding: 0.25rem;
    border-radius: 50%;
    box-shadow: 0 2px 8px rgba(0,0,0,0.10);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.95;
    transition: background 0.2s, opacity 0.2s;
    &:hover {
        background: ${({ theme }) => theme["purple-100"]};
        opacity: 1;
    }
`;

export const CarouselSideHover = styled.div<{ side: "left" | "right" }>`
    position: absolute;
    top: 0;
    bottom: 0;
    ${({ side }) => side === "left" ? "left: 0;" : "right: 0;"}
    width: 3rem;
    display: flex;
    align-items: center;
    justify-content: ${({ side }) => side === "left" ? "flex-start" : "flex-end"};
    z-index: 2;
    background: linear-gradient(
        to ${({ side }) => side === "left" ? "right" : "left"},
        rgba(20,18,28,0.7) 0%,
        rgba(20,18,28,0.0) 100%
    );
    pointer-events: all;
`;

