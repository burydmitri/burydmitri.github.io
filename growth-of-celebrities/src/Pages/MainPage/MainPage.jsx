import React from 'react';
import { Header } from '../../components/Header/';
import { Main } from '../../components/Main/';

export function MainPage(props) {
  return (
    <>
      <Header />
      <Main height={props.height}/>
    </>
  );
}
