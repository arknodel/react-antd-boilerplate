import React, { Component } from 'react';

import {
  StartPage
} from '../content';
import './home.css';
import {Base} from '../base/Base';

export const Home = () => {
  return (
    <Base title='Start'>
      <StartPage />
    </Base>
  );
};

export default Home;