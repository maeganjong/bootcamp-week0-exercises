import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledLink = styled(Link)`
	color: white;
	text-decoration: none;
	&:hover {
		color: orange;
	}
    display: block;
    padding: 20px;
    font-family: ${props => props.theme.fonts.text.family};
    font-weight: ${props => props.theme.fonts.text.weight};
`

export const Input = styled.input`
    background: lightblue;
    border: none;
    border-radius: 2px;
    cursor: pointer;

    &:hover {
        color: white;
    }
`

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: pink;
  margin: auto;
`

export const Display = styled.h1`
  font-size: 32px;
  margin-left: 5px;
  font-family: ${props => props.theme.fonts.text.family};
  font-weight: ${props => props.theme.fonts.text.weight};`
