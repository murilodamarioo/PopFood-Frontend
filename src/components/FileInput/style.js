import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  label {
    display: flex;
    align-items: center;
    gap: 8px;
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    font-family: 'Poppins';
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-weight: 500;
    line-height: 1.5rem;
    padding: 0.75rem 2rem;
    border-radius: 0.5rem;
    cursor: pointer;
    border: none;
    font-size: 0.875rem;
    
    &:hover {
      background-color: ${({ theme }) => theme.COLORS.LIGHT_700};
    }
  }

  input[type="file"] {
    display: none;
  }
`