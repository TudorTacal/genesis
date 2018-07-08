import express from 'express';
import React from 'react';
import App from '../client/App';
import Template from '../client/Template';
import { renderToString } from 'react-dom/server'; // render components to static markup
import { ServerStyleSheet } from 'styled-components';

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const sheet = new ServerStyleSheet();

  const app = renderToString(sheet.collectStyles(<App />));

  const styles = sheet.getStyleTags();

  const title = 'Kick starting an Isomorphic React Node Web App';
  
  res.send(Template(
    {
      app,
      styles,
      title
    }
  ));
})

app.listen(PORT, () => console.log(`App starting on port ${PORT}`));