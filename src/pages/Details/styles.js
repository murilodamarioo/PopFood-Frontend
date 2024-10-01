import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > *:first-child {
    align-self: start;
  }

  img {
    width: 24.375rem;
    height: 24.31rem;
    margin-top: 6.25rem;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-left: 3rem;
  margin-top: 9rem;

  h3 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 2.5rem;
    font-weight: 500;
    line-height: 3.5rem;
  }

  p {
    align-self: stretch;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  .content-wrapper {
    max-width: 43rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
`

export const Tags = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`

export const Add = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: 1.5rem;
    height: 1.5rem;
    flex-shrink: 0;
  }

  span {
    font-family: 'Roboto';
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 2rem;
    margin-left: 0.875rem;
    margin-right: 0.875rem;
  }

  :nth-child(1), :nth-child(3) {
    cursor: pointer;
  }

  :nth-child(4) {
    margin-left: 2rem;
  }
`