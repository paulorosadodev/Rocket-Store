import styled from "styled-components";

import { Link } from "react-router-dom";

export const NotFoundWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
    padding: 2rem;
    width: 100%;
    gap: 2rem;

    img {
        width: 30rem;
        height: auto;
        max-width: 100%;
    }
    
    @media (max-width: 992px) {
        img {
            width: 20rem;
        }
    }
    
    @media (max-width: 768px) {
        flex-direction: column;
        padding: 1.5rem;
        
        img {
            width: 15rem;
            margin-bottom: 1rem;
        }
    }
    
    @media (max-width: 480px) {
        padding: 1rem;
        
        img {
            width: 12rem;
        }
    }
`;

export const NotFoundContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    max-width: 35rem;
    width: 100%;
    padding: 2rem;
    background-color: ${props => props.theme["surface"]};
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    gap: 1.5rem;
    
    @media (max-width: 992px) {
        max-width: 30rem;
    }
    
    @media (max-width: 768px) {
        max-width: 100%;
        width: 90%;
        padding: 1.5rem;
    }
    
    @media (max-width: 480px) {
        padding: 1.25rem 1rem;
        gap: 1.25rem;
        border-radius: 8px;
    }
`;

export const NotFoundTitle = styled.h1`
    font-size: 2rem;
    font-weight: 700;
    color: ${props => props.theme["purple-300"]};
    margin: 0;
    
    @media (max-width: 768px) {
        font-size: 1.85rem;
    }
    
    @media (max-width: 480px) {
        font-size: 1.65rem;
    }
    
    @media (max-width: 360px) {
        font-size: 1.5rem;
    }
`;

export const NotFoundDescription = styled.p`
    font-size: 1.1rem;
    color: ${props => props.theme["gray-200"]};
    margin: 0;
    max-width: 90%;
    
    @media (max-width: 768px) {
        font-size: 1.05rem;
    }
    
    @media (max-width: 480px) {
        font-size: 1rem;
        line-height: 1.4;
    }
    
    @media (max-width: 360px) {
        font-size: 0.95rem;
    }
`;

export const NotFoundButton = styled(Link)`
    background-color: ${props => props.theme["purple-400"]};
    color: ${props => props.theme["white"]};
    border: none;
    border-radius: 8px;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    text-decoration: none;
    margin-top: 0.5rem;
    display: inline-block;
    
    &:hover {
        background-color: ${props => props.theme["purple-300"]};
    }
    
    @media (max-width: 768px) {
        font-size: 0.95rem;
        padding: 0.7rem 1.3rem;
    }
    
    @media (max-width: 480px) {
        width: 100%;
        padding: 0.75rem 1rem;
        font-size: 0.95rem;
        text-align: center;
    }
    
    @media (max-width: 360px) {
        padding: 0.7rem 0.75rem;
        font-size: 0.9rem;
    }
`;
