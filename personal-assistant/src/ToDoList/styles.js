import styled from 'styled-components'

export const Container = styled.div`
  width: 360px;
  display: flex;
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
