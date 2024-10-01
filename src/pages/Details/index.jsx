import { Container, Content, Tags, Add } from './styles'
import { Fragment } from 'react'

import { Tag } from '../../components/Tag'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { BackButton } from '../../components/BackButton'

import { PiCaretLeft } from 'react-icons/pi'
import { FiMinus, FiPlus } from 'react-icons/fi'

import dishImg from '../../assets/dish2.png'

export function Details() {
  return (
    <Fragment>
      <Header />
      <Container>
        <BackButton 
          title='voltar' 
          icon={PiCaretLeft} 
        />

        <img src={dishImg} alt="Imagem do prato" />

        <Content>
          <div className="content-wrapper">
            <h3>Salada Ravanello</h3>
            <p>
              Rabanetes, folhas verdes e molho agridoce salpicados com 
              gergelim. O pão naan dá um toque especial.
            </p>

            <Tags>
              <Tag title='Alface' />
              <Tag title='Cebola' />
              <Tag title='Pão naan' />
              <Tag title='Pepino' />
              <Tag title='Rabanete' />
              <Tag title='Tomate' />
            </Tags>
          </div>
          <Add>
            <FiMinus />
            <span>01</span>
            <FiPlus />
            <Button title="Incluir R$ 25,00"/>
          </Add>
        </Content>


      </Container>
    </Fragment>
  )
}