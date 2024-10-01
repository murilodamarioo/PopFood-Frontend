import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  padding: 1.5rem 7.6rem;

  margin-bottom: 2rem;
  
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  :nth-child(2) {
    height: 3rem;
  }

  :nth-child(3) {
    width: 13.5rem;
    height: 3rem;
  }

  :nth-child(4) {
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    transition: 0.3s;
  }

  :nth-child(4):hover {
    color: ${({ theme }) => theme.COLORS.CARROT_100};
    transition: 0.3s;
  }
`

export const Logo = styled.div`
  height: 1.75rem;
  display: flex;
  gap: 1.25rem;

  svg {
    width: 1.875rem;
    height: 1.875rem;
  }

  h1 {
    font-size: 1.5rem;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

`