import { Container, Form, Logo } from './styles'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

import { FaUser, FaLock } from 'react-icons/fa'
import { MdEmail} from 'react-icons/md'

import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { api } from '../../services/api'

export function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSignUp() {
    api.post('/users', { name, email, password })
    .then(() => {
      toast.success('Conta criada com sucesso!', {
        position: "top-center",
        theme: "dark"
      })
    })
    .catch(error => {
      if (error.message) {
        toast.error(error.response.data.message, {
          position: "top-center",
          theme: "dark"
        })
      } else {
        toast.error('Não foi possivel criar a conta', {
          position: "top-center",
          theme: "dark"
        })
      }
    })
  }

  return (
    <Container>
      <main>
        <ToastContainer />
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
            onChange={event => setName(event.target.value)}
          />

          <Input
            placeholder="Exemplo: jonh@email.com.br"
            icon={MdEmail}
            type="email"
            title="Email"
            onChange={event => setEmail(event.target.value)}
          />

          <Input
            placeholder="No mínimo 6 caracteres"
            icon={FaLock}
            type="password"
            title="Senha"
            onChange={event => setPassword(event.target.value)}
          />

          <Button title="Criar conta" onClick={handleSignUp}/>
          <a href="#">Já tenho uma conta</a>

        </Form>

      </main>
    </Container>
  )
}