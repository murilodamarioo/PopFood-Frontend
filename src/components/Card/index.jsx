import { Container, Information, Title, Description, Price, Add } from './styles'

import dishImg from '../../assets/dish.png'

import { FiPlus } from 'react-icons/fi'
import { FiMinus } from 'react-icons/fi'
import { GoHeartFill } from 'react-icons/go';

import { Button } from '../Button'

export function Card() {
  return(
    <Container>
      <GoHeartFill />
      <Information>
        <img src={dishImg} alt="Imagem da comida" />
        <Title>Torradas de Parma</Title>
        <Description>
          Presunto de parma e rúcula em um pão com fermentação natural.
        </Description>
        <Price>R$ 25,97</Price>
        <Add>
          <FiMinus />
          <span>1</span>
          <FiPlus />
          <Button title="Incluir"/>
        </Add>
      </Information>
    </Container>
  )
}