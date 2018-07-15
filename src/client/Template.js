const Template = ({app, styles, title}) => `
  <!DOCTYPE html>
  <html>
    <head>
      <title>${title}</title>
      ${styles}
    </head>
    <body style="margin:0">
      <div id="app">${app}</div>
      <script src='/bundle.js' defer></script>
    </body>
  </html>
`;

export default Template;