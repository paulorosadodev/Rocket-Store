import styled from "styled-components";

export const MenuBarWrapper = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0rem 3rem;
    background-color: ${props => props.theme["purple-900"]};

    img {
        width: 10rem;
    }

`;

export const CartIconContainer = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: fit-content;
    cursor: pointer;

    #cart-icon {
        color: ${props => props.theme["white"]};
        transition: color 0.2s;
    }

    #cart-icon:hover {
        color: ${props => props.theme["white-dark"]};
    }

    span {
        position: absolute;
        margin-bottom: 1.5rem;
        margin-left: 1.7rem;
        background-color: ${props => props.theme["purple-500"]};
        color: ${props => props.theme["white"]};
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

`;

export const CartIconWrapper = styled.div`
    position: relative;
`;
