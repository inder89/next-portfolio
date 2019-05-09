/* eslint-disable react/jsx-no-duplicate-props */
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

export default ({ children }) => (
  <div className="root">
    <Head>
      <title>NextPortfolio</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css"
      />
    </Head>
    <header className="main-header">
      <div className="container">
        <h1 className="logo">
          <img src="../static/eyeman.png" alt="Eye Guy" />
        </h1>
        <nav className="main-nav">
          <ul className="main-nav-list">
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
          </ul>
        </nav>
      </div>
    </header>

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
        .container {
          width: 960px;
          max-width: 100%;
          padding: 20px;
          margin: 0 auto;
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
        img {
          max-width: 100%;
          height: auto;
        }

        .main-header .container {
          display: flex;
          align-items: center;
          justify-content: space-around;
          flex-wrap: wrap;
        }
        .main-nav ul {
          margin: 1em 0 0.5em;
          text-align: center;
        }
        .main-nav li {
          display: inline;
        }
        .main-nav a {
          display: inline-block;
          padding: 0.5em 1.5em;
          text-decoration: none;
        }

        /* children styles */

        footer {
          padding: 1em;
        }

        @media (min-width: 960px) {
          .main-header .container {
            justify-content: space-between;
          }
        }
      `}
    </style>
  </div>
);
