import styled from "styled-components";

interface ProductImageWrapperProps {
    size?: "small" | "medium" | "large";
}

export const ProductImageWrapper = styled.div<ProductImageWrapperProps>`
    width: ${props => {
        switch (props.size) {
        case "small": return "5.5rem";
        case "large": return "20rem"; 
        case "medium":
        default: return "12rem";
        }
    }};
    height: ${props => {
        switch (props.size) {
        case "small": return "5.5rem";
        case "large": return "20rem";
        case "medium":
        default: return "12rem";
        }
    }};
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media (max-width: 768px) {
        width: ${props => {
        switch (props.size) {
        case "small": return "5rem";
        case "large": return "16rem"; 
        case "medium":
        default: return "10rem";
        }
    }};
        height: ${props => {
        switch (props.size) {
        case "small": return "5rem";
        case "large": return "16rem";
        case "medium":
        default: return "10rem";
        }
    }};
    }
    
    @media (max-width: 480px) {
        width: ${props => {
        switch (props.size) {
        case "small": return "4.5rem";
        case "large": return "12rem"; 
        case "medium":
        default: return "8rem";
        }
    }};
        height: ${props => {
        switch (props.size) {
        case "small": return "4.5rem";
        case "large": return "12rem";
        case "medium":
        default: return "8rem";
        }
    }};
    }
    
    padding: ${props => {
        switch (props.size) {
        case "small": return "0.5rem";
        case "large": return "1.5rem";
        case "medium":
        default: return "1.5rem";
        }
    }};
    
    @media (max-width: 768px) {
        padding: ${props => {
        switch (props.size) {
        case "small": return "0.4rem";
        case "large": return "1.25rem";
        case "medium":
        default: return "1.25rem";
        }
    }};
    }
    
    @media (max-width: 480px) {
        padding: ${props => {
        switch (props.size) {
        case "small": return "0.3rem";
        case "large": return "1rem";
        case "medium":
        default: return "1rem";
        }
    }};
    };
    margin-bottom: ${props => props.size === "small" ? "0" : "1rem"};
    
    @media (max-width: 768px) {
        margin-bottom: ${props => props.size === "small" ? "0" : "0.75rem"};
    }
    
    @media (max-width: 480px) {
        margin-bottom: ${props => props.size === "small" ? "0" : "0.5rem"};
    }
`;

export const ProductImage = styled.img`
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    border-radius: 8px;
`;
