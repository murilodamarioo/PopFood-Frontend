import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  > main {
    flex: 1;
    max-width: 70rem;
    margin: 0 auto;
  }

  h2 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 2rem;
    font-family: 'Poppins';
    font-weight: 500;
    line-height: 2.8rem;
    margin-bottom: 2rem;
    margin-top: 1.5rem;
  }

  @media(max-width: 1368px) {
    margin-bottom: 7.25rem;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  p {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-family: 'Roboto';
    font-size: 1rem;
    font-weight: 400;
    line-height: 1rem;
  }

  .input-wrapper-inc {
    display: flex;
    gap: 2rem;
  }

  .input-wrapper-ip {
    display: flex;
    gap: 2rem;
  }


  .input-wrapper-d {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .wrapper-group {
    display: flex;
    gap: 1rem;
    flex-direction: column;
  }

  .wrapper-group-tag {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .dish-name {
    min-width: 29.2rem;
    padding: 0.75rem 0.875rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    border-radius: 0.5rem;
    border: none;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  .price {
    min-width: 16rem;
    padding: 0.75rem;
    border: none;
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
  
  .custom-button {
    align-self: flex-end;
    width: fit-content;
  }
`

export const SectionTags = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  min-width: 52rem;
  height: 3rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_800};
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
`

export const Textarea = styled.textarea`
  width: 100%;
  height: 10.75rem;
  padding: 0.875rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_800};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  border: none;
  border-radius: 0.5rem;
  resize: none;
`