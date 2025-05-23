import styled from "styled-components";

export const MenuBarWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0rem 3rem;
    background-color: ${props => props.theme["purple-900"]};
    height: 8rem;
    min-height: 8rem;

    .logo-clickable {
        height: 8rem;
        width: auto;
        cursor: pointer;
        transition: filter 0.2s;
        display: block;
    }
    
    @media (max-width: 768px) {
        flex-direction: column;
        padding: 1rem 2rem;
        height: auto;
        min-height: auto;
        
        .logo-clickable {
            height: 6rem;
            margin-bottom: 0.5rem;
        }
    }
    
    @media (max-width: 480px) {
        padding: 0.75rem 1rem;
        
        .logo-clickable {
            height: 5rem;
        }
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
    display: flex;
    align-items: center;
`;

export const OrdersIconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: fit-content;
    cursor: pointer;
    margin-right: 1.6rem;
    background: none;
    border: none;
    transition: background 0.2s;
    
    svg {
        color: ${props => props.theme["white"]};
        transition: color 0.2s;
    }
    &:hover svg {
        color: ${props => props.theme["white-dark"]};
    }
`;

export const MobileTopBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    
    @media (min-width: 769px) {
        display: none; 
    }
`;
