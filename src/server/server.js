import express from 'express';
import React from 'react';
import App from '../client/App';
import Template from '../client/Template';
import { renderToString } from 'react-dom/server'; // render components to static markup

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const app = renderToString(<App />);
  const title = 'Kick starting an Isomorphic React Node Web App';
  
  res.send(Template(app, title));
})

app.listen(PORT, () => console.log(`App starting on port ${PORT}`));