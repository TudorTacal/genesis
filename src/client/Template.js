const Template = (app, title) => `
  <!DOCTYPE html>
  <html>
    <head>
      <title>${title}</title>
    </head>
    <body style="margin:0">
      <div id="app">${app}</div>
    </body>
  </html>
`;

export default Template;