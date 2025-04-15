import styled from "styled-components";

export const SummaryContainer = styled.section`
  display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -5rem;
    padding: 2.5rem 4rem;
    border-radius: 6px;
    background: ${({ theme }) => theme["gray-800"]};
    `;
    
    export const SummaryCard = styled.div`
    background: ${({ theme }) => theme["gray-600"]};
    border-radius: 6px;
    padding: 2rem 3rem; 
    color: ${({ theme }) => theme.white};
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    &.entries {
        background: ${({ theme }) => theme["gray-600"]};
        & svg {
            color: ${({ theme }) => theme["green-300"]};
        }
    }
    &.exits { 
        background: ${({ theme }) => theme["gray-600"]};
        & svg {
            color: ${({ theme }) => theme["red-300"]};
        }
    }
    &.total { 
        background: ${({ theme }) => theme["green-700"]};
        & svg {
            color: ${({ theme }) => theme.white};
        }
    } 

    & header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        gap: 1rem;
        & span {
            font-size: 1.5rem;
            color: ${({ theme }) => theme["gray-400"]};
        }
    }
    & strong {
        font-size: 2rem;
        font-weight: 700;
        line-height: 1.4;
        margin-top: 1rem;
        display: block;
        color: ${({ theme }) => theme["gray-100"]};
    }
    `;
    

