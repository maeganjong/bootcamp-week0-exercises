import React from 'react'
import {
  Container, Label, Highlight, Display, Input,
} from '../FormInput/styles'

const SearchRow = ({ input, setInput }) => (
  <Container>
    <Input
      placeholder="SEARCH"
      value={input}
      onChange={e => setInput(e.target.value)}
    />
  </Container>

)

export default SearchRow
