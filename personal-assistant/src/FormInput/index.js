import React from 'react'
import {
  Container, Label, Highlight, Display, Input,
} from './styles'

const FormInput = ({ label, value, setForm }) => (
  <Container>

    <Input
      placeholder={label.toUpperCase()}
      value={value}
      onChange={e => setForm({ [label]: e.target.value })}
    />
  </Container>

)

export default FormInput
