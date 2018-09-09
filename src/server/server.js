import express from 'express';
import React from 'react';
import webpack from 'webpack';
import { renderToString } from 'react-dom/server'; // render components to static markup
import { ServerStyleSheet } from 'styled-components';
import hogan from 'hogan-express-strict';
import path from 'path';
import { StaticRouter, matchPath } from 'react-router-dom';
import webpackMiddleware from 'webpack-dev-middleware';
import routes from '../shared/routes';
import App from '../client/App';
import webpackConfig from '../../webpack.config';
import webpackHotMiddleware from 'webpack-hot-middleware';

const app = express();
const compiler = webpack(webpackConfig);

app.use(express.static('dist'));
app.set('view engine', 'mustache');
const templatePath = path.join(__dirname, 'templates/');
app.engine('mustache', hogan);
app.set('views', templatePath);
// webpack hmr
app.use(
    webpackMiddleware(compiler, {
      noInfo: true,
      lazy: false,
      publicPath: webpackConfig.output.publicPath
  })
);
app.use(webpackHotMiddleware(compiler));

const PORT = process.env.PORT || 3000;

app.get('*', (req, res) => {
  try {
    const sheet = new ServerStyleSheet();
    const app = renderToString(sheet.collectStyles(
      <StaticRouter location={req.url} context={{}}>
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

app.listen(PORT, () => console.log(`App starting on port ${PORT}`));