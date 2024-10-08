import { Container, Logo } from './styles'

export function Footer() {
  return(
    <Container>
      <Logo>
        <svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path id="Polygon 1" d="M12.7274 0.48645L25.3734 7.78763V22.39L12.7274 29.6912L0.0813456 22.39V7.78763L12.7274 0.48645Z" fill="#4D585E"/>
        </svg>
        
        <p>
          PopFood
        </p>
      </Logo>
      <p>© 2024 - Todos os direitos reservados</p>
    </Container>
  )
}