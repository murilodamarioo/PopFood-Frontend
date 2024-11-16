import { Container } from './style' 

export function FileInput({ icon: Icon, ...rest }) {
  return (
    <Container>
      <label htmlFor="file-upload">
        {Icon && <Icon size={20} />}
        Selecione Imagem
      </label>
      <input type="file" id="file-upload" {...rest}/>
    </Container>
  )
}