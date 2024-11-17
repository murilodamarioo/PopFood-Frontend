import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  height: 2rem;
  padding: 0.625rem 1rem;

  border-radius: 0.5rem;

  background-color: ${(props) => props.$isnew ? 'transparent' : props.theme.COLORS.LIGHT_600};
  border: ${(props) => props.$isnew ? `1px dashed ${props.theme.COLORS.LIGHT_500}` : 'none'};

  input {
    width: 4.25rem;
    font-family: 'Roboto';
    line-height: 1rem;
    font-weight: 400;
    min-width: 4.25rem; 
    border: none;
    outline: none;
    font-size: 1rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: none;
  }

  button {
    border: none;
    background: none;
    color: ${(props) => (props.$isnew ? props.theme.COLORS.LIGHT_500 : props.theme.COLORS.LIGHT_100)};
    cursor: pointer;
  }
`


/*


  display: flex;
  align-items: center;

  height: 2rem;
  width: fit-content;

  background-color: ${(props) => (props.$isnew ? 'transparent' : props.theme.COLORS.LIGHT_600)};
  border: ${(props) => (props.$isnew ? `1px dashed ${props.theme.COLORS.LIGHT_500}` : 'none')};
  border-radius: 0.5rem;


  input {
    background: transparent;
    border: none;
    color: ${(props) => (props.$isnew ? props.theme.COLORS.LIGHT_500 : props.theme.COLORS.LIGHT_100)};
    padding: 0.6rem 1rem;
    outline: none;
    font-size: 1rem;
  }

  button {
    background: none;
    border: none;
    color: ${(props) => (props.$isnew ? '#0F0' : '#F00')};
    cursor: pointer;
    padding: 0.6rem 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    &:hover {
      opacity: 0.8;
    }
  }


*/