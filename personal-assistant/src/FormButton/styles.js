import styled from 'styled-components'

export const Button = styled.a`
    background: white;
    box-sizing: inherit;
    transition-property: all;
    transition-duration: .3s;
    transition-timing-function: ease;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color: black;
    cursor: pointer;
    font-size:16px;
    font-weight: 100;
    line-height: 45px;
    margin: 0 0 2em;
    max-width: 160px; 
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
    width: 100%; 
    
    @media(min-width: 600px) {
        margin: 0 1em 2em;}
    
    svg {
    height: 45px;
    left: 0;
    position: absolute;
    top: 0; 
    width: 100%; 
  }
    
    rect {
    fill: none;
    stroke: black;
    stroke-width: 2;
    stroke-dasharray: 422, 0;
    transition: all 0.2s linear;
    }}

  &:hover {
    font-weight: 900;
    letter-spacing: 1px;
  
  rect {
    stroke-width: 5;
    stroke-dasharray: 15, 310;
    stroke-dashoffset: 48;
    transition: all 1.35s cubic-bezier(0.19, 1, 0.22, 1);
  }
`

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: green;
  margin: auto;
  flex-direction: row;
`
