import styled from 'styled-components'


export const Button = styled.button`
  position: relative;
  width: 32px;
  height: 32px;
  opacity: 0;
  background-color: aqua;
  transition: all 0.225s linear;
  border: none;

  &::before, &::after {
    position: absolute;
    top: 0;
    left: 15px;
    content: ' ';
    height: 33px;
    width: 2px;
    background-color: white;
  }
  &::before{
    transform: rotate(45deg);
  }
  &::after{
    transform: rotate(-45deg);
  }
`

export const ButtonContainer = styled.div`
  width: 32px;
  height: 32px;
  border: 1px solid aqua;

  &:hover {
    background-color: aqua;
  }
  &:hover ${Button} {
    opacity: 1;
  }
`

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

