import styled from 'styled-components'

export const Container = styled.div`
  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    width: 1.5rem;
    height: 1.5rem;
    position: absolute;
    top: 1rem;
    left: 16rem;
  }
`

export const Information = styled.div`
  max-width: 19rem;
  height: 28.875rem;

  padding: 1.5rem;
  border-radius: 0.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.9rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  
  img {
    width: 11rem;
    height: 11rem;
  }
`

export const Title = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2.1rem;
  text-align: center;
`

export const Description = styled.p`
  font-family: 'Roboto';
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.4rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  text-align: center;
`

export const Price = styled.span`
  font-family: 'Roboto';
  font-size: 2rem;
  font-weight: 400;
  line-height: 3.2rem;
  color: ${({ theme }) => theme.COLORS.CAKE_200};
`

export const Add = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  svg {
    width: 1.5rem;
    height: 1.5rem;
    flex-shrink: 0;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`