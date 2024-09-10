import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
 * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 }

 body {
  background-color: ${({ theme }) => theme.COLORS.DARK_400};
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  
  -webkit-font-smoothing: antialiased;
 }

 body, input-security, button, textarea {
 }

 a {
  text-decoration: none;
 }

 button a {
  cursor: pointer;
 }
`