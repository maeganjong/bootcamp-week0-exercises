import React from 'react'
import {
  Label, Highlight, Display, Input,
} from '../FormInput/styles'
import { Container, StyledLink } from './styles'

const SearchRow = ({ input, setInput }) => (
  <Container>
    <StyledLink to="/">Home</StyledLink>
    <StyledLink to="/app">App</StyledLink>
  </Container>

)

export default SearchRow
