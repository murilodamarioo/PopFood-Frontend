import { Container, Form, Logo } from './styles'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

import { FaUser, FaLock } from 'react-icons/fa'
import { MdEmail} from 'react-icons/md'


export function SignUp() {
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
          <h2>Crie sua conta</h2>
          <Input
            placeholder="Exemplo: John Doe"
            icon={FaUser}
            type="text"
            title="Seu nome"
          />

          <Input
            placeholder="Exemplo: jonh@email.com.br"
            icon={MdEmail}
            type="email"
            title="Email"
          />

          <Input
            placeholder="No mínimo 6 caracteres"
            icon={FaLock}
            type="password"
            title="Senha"
          />

          <Button title="Criar conta"/>
          <a href="#">Já tenho uma conta</a>

        </Form>

      </main>
    </Container>
  )
}