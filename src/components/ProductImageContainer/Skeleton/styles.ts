import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
    0% {
        background-position: -400px 0;
    }
    100% {
        background-position: 400px 0;
    }
`;

interface SkeletonImageContainerProps {
    size?: "small" | "medium" | "large";
}

export const SkeletonImageContainer = styled.div<SkeletonImageContainerProps>`
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
    background: #222;
    border-radius: 12px;
    position: relative;
    overflow: hidden;
    margin-bottom: ${props => props.size === "small" ? "0" : "1rem"};

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
