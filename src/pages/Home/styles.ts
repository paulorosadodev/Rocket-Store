import styled from "styled-components";

export const HomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 2rem;
    
    @media (max-width: 768px) {
        padding-bottom: 1.5rem;
    }
    
    @media (max-width: 480px) {
        padding-bottom: 1rem;
    }
`;