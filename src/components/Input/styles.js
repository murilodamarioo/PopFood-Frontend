import styled from 'styled-components'

export const Container = styled.div`
  min-width: 36rem;
  width: auto;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  border-radius: 5px;

  > input {
    height: 3.5rem;
    width: 100%;

    padding: 0.75rem 0.875rem;
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    border: 0;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500} 
    }
  }

  > svg {
    margin-left: 1rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_500}
  }
`