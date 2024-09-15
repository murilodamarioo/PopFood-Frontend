import { Container, Form, Logo } from './styles'

import { Input } from '../../components/Input'

import { MdEmail} from 'react-icons/md'
import { FaLock } from 'react-icons/fa'
import { Button } from '../../components/Button'

export function SignIn() {
  return (
    <Container>
      <main>
        <Logo>
          <svg width="39" height="44" viewBox="0 0 39 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.6574 0L38.4133 10.8287V32.4862L19.6574 43.3149L0.901548 32.4862V10.8287L19.6574 0Z" fill="#065E7C" />
          </svg>

          <h1>PopFood</h1>
        </Logo>

        <Form>
          <h2>Faça login</h2>
          <Input 
            placeholder="Exemplo: jonh@email.com.br"
            icon={MdEmail}
            type="email"
            title="Email"
          />

          <Input
            placeholder="Informe sua senha"
            icon={FaLock}
            type="password"
            title="Senha"
          />
        
          <Button title="Entrar"/>

          <a href="#">Criar uma conta</a>
        </Form>
      </main>
    </Container>
  )
}