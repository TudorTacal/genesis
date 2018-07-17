const Template = ({ app, styles, title }) => `
  <!DOCTYPE html>
  <html>
    <head>
      <!-- Global site tag (gtag.js) - Google Analytics -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-92765442-1"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-92765442-1');
      </script>
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