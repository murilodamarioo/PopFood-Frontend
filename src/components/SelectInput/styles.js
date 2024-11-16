import styled from 'styled-components'

export const Container = styled.div`
  position: relative;

  select {
    min-height: 3rem;
    min-width: 22.75rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    padding: 1rem;
    border: none;
    border-radius: 0.5rem;
    appearance: none;
    outline: none;
  }

  .chevron {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }
`