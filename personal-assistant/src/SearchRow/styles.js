import styled from 'styled-components'

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
  width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: pink;
  margin: auto;
`

export const Display = styled.h1`
  font-size: 32px;
  margin-left: 5px;
  font-family: ${props => props.theme.fonts.text.family};
  font-weight: ${props => props.theme.fonts.text.weight};

`
