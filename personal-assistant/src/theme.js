import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const StyledLink = styled(Link)`
  color: red;
`

const theme = {
  colors: {
    layout: {
      background: '#ffffff',
    },
    item: {
      background: '#61dafb',
    },
  },
  fonts: {
    header: {
      family: 'Arial',
      weight: 'bold',
    },
    text: {
      family: 'Arial',
      weight: 'normal',
    },
  },
}

export default theme
