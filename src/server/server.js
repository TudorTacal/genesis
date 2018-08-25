import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server'; // render components to static markup
import { ServerStyleSheet } from 'styled-components';
import hogan from 'hogan-express-strict';
import path from 'path';
import { StaticRouter } from 'react-router-dom';
import App from '../client/App';

const app = express();
const context = {};

app.use(express.static('dist'));
app.set('view engine', 'mustache');
const templatePath = path.join(__dirname, 'templates/');
app.engine('mustache', hogan);
app.set('views', templatePath);

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  try {
    const sheet = new ServerStyleSheet();
    const app = renderToString(sheet.collectStyles(
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    ));
    const styles = sheet.getStyleTags();
    const title = 'Tudor Tacal';
    res.render('app',
      {
        app,
        styles,
        title
      }
    );
  }
  catch (e) {
    console.log(e);
  }
})

app.get('/posts', (req, res) => {
  try {
    const sheet = new ServerStyleSheet();
   
    const app = renderToString(sheet.collectStyles(
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    ));
    const styles = sheet.getStyleTags();
    const title = 'Tudor Tacal';
    console.log(context);
    res.render('app', { app, styles, title });
  }
  catch (e) {
    console.log(e);
  }
});

app.listen(PORT, () => console.log(`App starting on port ${PORT}`));