import styled from 'styled-components'

export const Container = styled.div`
  width: auto;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  text-align: center;
  font-family: 'Poppins';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_1000};
  border-radius: 5px;

  padding: 0.25rem 0.5rem;
`