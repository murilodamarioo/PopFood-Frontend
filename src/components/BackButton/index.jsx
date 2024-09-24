import { Container } from './styles'

export function BackButton({ icon: Icon, title, ...rest }) {
  return(
    <Container type='button' {...rest}>
      {Icon && <Icon/>}
      {title}
    </Container>
  )
}