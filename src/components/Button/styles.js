import styled from 'styled-components'

export const Container = styled.button`
  width: auto;
  height: 3.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  background-color: ${({ theme, disabled }) => disabled ? theme.COLORS.TOMATO_400 : theme.COLORS.TOMATO_100};  
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  border: 0;
  border-radius: 5px;

  padding: 0.75rem 2rem;

  svg {
    width: 1.5rem;
    height: 1.5rem;
    flex-shrink: 0;
  }

  &:hover {
    background-color: ${({ theme, disabled }) => disabled ? theme.COLORS.TOMATO_400 : theme.COLORS.TOMATO_200};
    cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  }
`