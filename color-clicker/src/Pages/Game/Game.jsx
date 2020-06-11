import React, { useState } from 'react';
import styled from 'styled-components';
import { ClickerButton } from '../../Components/ClickerButton/ClickerButton';

const Wrap = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  margin: 0;
  padding: 0;
`

export function Game(props) {

  const [active, setActive] = useState(false);

    return (
      <Wrap >
        <ClickerButton active={true}/>
        <ClickerButton active={false}/>
        <ClickerButton active={false}/>
        <ClickerButton active={false}/>

      </Wrap>
    );
}
