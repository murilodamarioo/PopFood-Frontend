import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  align-items: center;

  border: none;
  background-color: transparent;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2.1rem;

  svg {
    width: 2rem;
    height: 2rem;
    flex-shrink: 0;
  }
`