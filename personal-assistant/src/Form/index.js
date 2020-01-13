import React, { useReducer } from 'react'
import nanoid from 'nanoid'
import { Container, Row } from './styles'
import FormInput from '../FormInput'
import FormButton from '../FormButton'

const formReducer = (prevState, payload) => {
  console.log({ ...prevState, ...payload })

  return ({ ...prevState, ...payload })
}

const Form = ({ todos, setTodos }) => {
  const [form, setForm] = useReducer(formReducer,
    { title: '', details: '' })

  return (
    <Container>
      <FormInput label="title" value={form.title} setForm={setForm} />
      <FormInput label="details" value={form.details} setForm={setForm} />
      <Row>
        <FormButton
          text="add"
          action={
          form.title.length > 0 ? () => setTodos([...todos, { ...form, id: nanoid() }]) : false
}
        />
        <FormButton text="reset" action={() => setForm({ title: '', details: '' })} />
      </Row>
    </Container>
  )
}

export default Form
