import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta
            name="description"
            content="A site for my programming portfolio"
          />
          <meta charSet="utf-8" />
          <meta name="robots" content="noindex, nofollow" />
          <meta name="viewport" content="width=device-width" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Catamaran:400,700,900"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="../stylesheets/style.css"
          />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.6.1/css/all.css"
            integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP"
            crossOrigin="anonymous"
          />

          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <style global jsx>
            {`
              body {
                font-family: 'leo-sans', sans-serif;
                background-color: var(--white);
                --green: #86c232;
                --dark: #222629;
                --gray: #474b4f;
                --slate: #6b6e60;
                --blue: #05386b;
                --greenish: #379683;
                --puregreen: #5cdb95;
                --lightgreen: #8ee4af;
                --white: #fff;
              }
            `}
          </style>
        </body>
      </html>
    );
  }
}
