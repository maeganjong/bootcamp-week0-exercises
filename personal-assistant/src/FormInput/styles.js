import styled from 'styled-components'

export const Input = styled.input`
    background: lightblue;
    border: none;
    border-radius: 2px;
    font-size:18px;
    padding:10px 10px 10px 5px;
    display:block;
    width:100%;
    border:none;
    border-bottom:1px solid #757575;
    font-family: ${props => props.theme.fonts.text.family};
    font-weight: ${props => props.theme.fonts.text.weight};
    cursor: pointer;
    &:focus {
      outline:none;
    }
`
export const Highlight = styled.span`
    position:absolute;
    height:60%; 
    width:100px; 
    top:25%; 
    left:0;
    pointer-events:none;
    opacity:0.5;
`
export const Label = styled.label`
    color:#999; 
    font-size:18px;
    font-weight:normal;
    position:absolute;
    pointer-events:none;
    left:5px;
    top:10px;
    transition:0.2s ease all; 
    -moz-transition:0.2s ease all; 
    -webkit-transition:0.2s ease all;
`

export const Container = styled.div`
  width: 360px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: pink;
  margin: auto;
  position:relative; 
  margin-bottom:45px; 
`

export const Display = styled.h1`
  font-size: 32px;
  margin-left: 5px;
  font-family: ${props => props.theme.fonts.text.family};
  font-weight: ${props => props.theme.fonts.text.weight};
  text-align:center;
`
