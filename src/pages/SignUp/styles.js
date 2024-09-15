import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'


export const Container = styled.div`
  main {
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 18.75rem;

    @media(max-width: ${DEVICE_BREAKPOINTS.SM}) {
      display: flex;
      flex-direction: column;
      gap: 4.5rem;
      margin: auto;
    }
  }
`

export const Logo = styled.div`
  display: flex;
  gap: 1.25rem;
`

export const Form = styled.form`

  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 29.75rem;

  h2 {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 2rem;
    font-style: none;
    font-weight: 500;
    line-height: 2.8rem;
    text-align: center;
  }

  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  padding: 4rem;
  border-radius: 5px;

  a {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    text-align: center;
  }

  @media(max-width: ${DEVICE_BREAKPOINTS.SM}) {
    background-color: transparent;
    
    h2 {
      display: none;
    }
  }
`
