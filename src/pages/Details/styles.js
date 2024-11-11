import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;

    max-width: 70rem;
    margin: 0 auto;

    > *:first-child{
      align-self: flex-start;
    }
  }
`;

export const Content = styled.div`
  padding: 20px;
  flex: 1;

  display: flex;
  align-items: center;
  gap: 3rem;

  h3 {
    font-family: 'Poppins';
    font-size: 2.5rem;
    font-weight: 500;
    line-height: 3.5rem;
  }

  p {
    font-family: 'Poppins';
    font-size: 1.5rem;
    line-height: 2rem;
  }

  img {
    width: 24.4rem;
    height: 24.4rem;
    object-fit: cover;
  }

  .content-wrapper {
    width: 42.9rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
`;


export const Tags = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`

export const Add = styled.div`
  display: flex;
  align-items: center;

  margin-top: 3rem;

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