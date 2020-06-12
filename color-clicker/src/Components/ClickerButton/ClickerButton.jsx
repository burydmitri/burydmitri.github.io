import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    width: 100%;
    height: 25vh;

    border: 2px solid #000;
    outline: none;
    color: rgba(255, 255, 255, 0);
    font-size: 36px;
    font-weight: 800;
    font-family: 'Montserrat';
    ${props => props.active ? 
      'color: rgba(255, 255, 255, 1); background: #11998e; background: -webkit-linear-gradient(to right, #38ef7d, #11998e); background: linear-gradient(to right, #38ef7d, #11998e);' :  'background: #111;'}


    margin: 0;
    padding: 0;
`

export function ClickerButton(props) {
  return (
    <Button active={props.active}>
      CLICK
    </Button>
  );
}
