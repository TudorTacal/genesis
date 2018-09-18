import React from 'react';
import { hydrate } from 'react-dom';
import { HotApp } from './App';
import { BrowserRouter } from 'react-router-dom';

hydrate(
    <BrowserRouter>
      <HotApp />
    </BrowserRouter>,
    document.getElementById('root')
);



