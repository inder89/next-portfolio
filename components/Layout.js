/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import styled from 'styled-components';

const StyledLink = styled.a`
  background-color: #607d8b;
  color: white;
  padding: 1em 1em;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 2%;
`;

Router.onRouteChangeStart = url => {
  console.log('url');
  NProgress.start(); // start the loading icon
};

// call the done method when route change is complete
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default ({ children, title }) => (
  <div className="root">
    <Head>
      <title>NextPortfolio</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css"
      />
    </Head>
    <header>
      <img src="../static/eyeman.png" alt="logo" />
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/services">
        <a>Services</a>
      </Link>
      <Link href="/shop">
        <a>Shop</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
      <Link prefetch href="/appointment" passHref>
        <StyledLink>Make an appointment</StyledLink>
      </Link>
    </header>

    <h1>{title}</h1>
    {children}

    <footer>
      &copy;
      {new Date().getFullYear()}
    </footer>
    <style jsx>
      {`
        .root {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
        html {
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
        }
        *,
        *:before,
        *:after {
          -webkit-box-sizing: inherit;
          -moz-box-sizing: inherit;
          box-sizing: inherit;
        }
        header {
          width: 100%;
          display: flex;
          justify-content: flex-start;
          flex-wrap: wrap;
          align-items: center;
          padding: 1em;
          margin-top: 2em;
          font-size: 1.2rem;
          background: ;
        }
        header a {
          color: #004466;
          text-decoration: none;
          padding: 1rem;
          flex-grow: 1;
        }
        header a:hover {
          font-weight: bold;
          color: red;
        }
        footer {
          padding: 1em;
        }
      `}
    </style>
  </div>
);
