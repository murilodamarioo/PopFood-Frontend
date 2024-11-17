import { Fragment } from 'react'
import { Container, Form, Textarea, SectionTags } from './styles'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { BackButton } from '../../components/BackButton'
import { Footer } from '../../components/Footer'
import { FileInput } from '../../components/FileInput'
import { SelectInput } from '../../components/SelectInput'
import { NoteItem } from '../../components/NoteItem'

import { PiCaretLeft } from 'react-icons/pi'
import { PiUploadSimpleBold } from 'react-icons/pi'
import { FaChevronDown } from 'react-icons/fa6' 


export function AddDishes() {

  const categories = [
    { value: 'refeicao', label: 'Refeição' },
    { value: 'sobremesa', label: 'Sobremesa' },
    { value: 'bebida', label: 'Bebida' },
  ]
  
  return(
    <Fragment>
      <Header />
      <Container>
        <main>
          <BackButton
            title='voltar'
            icon={PiCaretLeft}
          />

          <h2>Adicionar pratos</h2>

          <Form>
            <div className="input-wrapper-inc">
              <div className="wrapper-group">
                <p>Imagem do prato</p>
                <FileInput icon={PiUploadSimpleBold} />
              </div>

              <div className="wrapper-group">
                <p>Nome</p>
                <input 
                  type="text" 
                  placeholder="Ex.: Salada Ceaser"
                  className="dish-name"/>
              </div>

              <div className="wrapper-group">
                <p>Categoria</p>
                <SelectInput options={categories} icon={FaChevronDown}/>
              </div>
            </div>

            <div className="input-wrapper-ip">
                <div className="wrapper-group-tag">
                  <p>Ingredientes</p>
                  <SectionTags>
                    <NoteItem value="Alface"/>
                    <NoteItem 
                      isNew 
                      placeholder="Adicionar"
                    />
                  </SectionTags>
                </div>

              <div className="wrapper-group">
                  <p>Preço</p>
                  <input 
                    type="text" 
                    placeholder="R$ 15,00"
                    className="price"
                  />
                </div>
            </div>

            <div className="input-wrapper-d">
              <p>Descrição</p>
              <Textarea 
                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              />
            </div>

            <Button
              className="custom-button"
              title="Salvar alterações" 
            />
          </Form>
        </main>
      </Container>
      <Footer />
    </Fragment>
  )
}