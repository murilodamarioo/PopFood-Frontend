import styled from 'styled-components'

export const Container = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 7.6rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_200};
  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  font-family: 'Roboto';
  font-size: 0.9rem;
  font-weight: 400;
`

export const Logo = styled.div`
  display: flex;
  gap: 0.7rem;
  
  color: ${({ theme }) => theme.COLORS.LIGHT_700};

  font-family: 'Roboto';
  font-size: 1.5rem;
  font-weight: 700;
  line-height: normal;
`