import styled from "styled-components";

export const SearchBarWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 80%;
    margin: 0 1.5rem;
    
    @media (max-width: 768px) {
        width: 100%;
        margin: 0.5rem 0 0;
    }
`;

export const SearchInput = styled.input`
    width: 100%;
    padding: 0.625rem 1rem;
    border-radius: 8px;
    background: ${props => props.theme["purple-800"]};
    font-size: 1rem;
    outline: none;
    transition: border 0.2s;
    box-shadow: 0 1px 2px rgba(0,0,0,0.03);
    border: none;
    color: ${props => props.theme["white"]};
    &::placeholder {
        color: ${props => props.theme["white"]};
    }
`;

export const SuggestionsList = styled.ul`
    position: absolute;
    top: 110%;
    left: 0;
    width: 100%;
    background: ${props => props.theme["purple-800"]};
    border-radius: 8px;
    box-shadow: 0 4px 16px rgba(0,0,0,0.08);
    z-index: 10;
    max-height: 20rem;
    overflow-y: auto;
    padding: 0;
    margin: 0.25rem 0 0 0;
    list-style: none;

    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme["purple-300"]} ${({ theme }) => theme["purple-500"]};
    
    &::-webkit-scrollbar {
        width: 8px;
        background: ${({ theme }) => theme["purple-800"]};
        border-radius: 4px;
    }
    
    &::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme["purple-300"]};
        border-radius: 4px;
    }
    
    &::-webkit-scrollbar-thumb:hover {
        background: ${({ theme }) => theme["purple-200"]};
    }
`;

export const SuggestionItem = styled.li`
    padding: 0.75rem 1rem;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 2px;
    transition: background 0.15s;
    color: ${props => props.theme["gray-200"]};
    &:hover {
        background: ${props => props.theme["purple-500"]};
    }
    &:active {
        background: ${props => props.theme["gray-200"]};
    }
    .searchbar-title {
        color: ${props => props.theme["white"]};
        font-size: 1rem;
        font-weight: 500;
        line-height: 1.2;
        margin-bottom: 0.1rem;
    }
    .searchbar-category {
        color: ${props => props.theme["purple-200"]};
        font-size: 0.85rem;
        font-weight: 400;
        line-height: 1.1;
    }
`;
