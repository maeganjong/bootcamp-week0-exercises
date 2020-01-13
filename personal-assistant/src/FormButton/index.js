import React, { useReducer } from 'react'
import { Button, Container } from './styles'

const FormButton = ({ text, action }) => (

  <Button onClick={action}>
    <svg>
      <rect x="0" y="0" fill="none" width="100%" height="100%" />
    </svg>
    {text}
  </Button>

)

export default FormButton
