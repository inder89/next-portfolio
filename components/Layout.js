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
  background-color: #1d7206;
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
  <div className="wrapper">
    <Head>
      <title>Greg Luke</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css"
      />
    </Head>
    <header className="main-header">
      <div className="container">
        <div className="logo">
          <img
            className="logo_main"
            src="../static/eyeman.png"
            alt="Eye Guy"
            width="93"
            height="95"
          />
          <div className="logo_full">
            <div className="logo_text">Greg Luke Optometrist</div>
            <div className="logo_slogan">optometry</div>
          </div>
        </div>
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
        .wrapper {
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

        .main-header .container {
          display: flex;
          align-items: center;
          justify-content: space-around;
          flex-wrap: wrap;
          background-color: #f0f0f0;
        }

        .main-nav .logo {
          flex: 0 0 80%;
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
          color: #3a0046;
        }
        .main-nav a:hover {
          color: #12a115;
        }
        .logo {
          display: flex;
        }

        .logo .logo_text {
          font-family: 'Raleway', sans-serif;
          font-size: 1.667em;
          line-height: 1em;
          font-weight: 600;
        }

        .logo .logo_full {
          display: inline-block;
          max-width: 170px;
        }
        .logo_slogan {
          font-weight: 500;
          line-height: 1em;
          float: left;
          text-align: left;
          padding-left: 2px;
          padding-top: 0.1em;
          letter-spacing: -0.6px;
        }
        .{child} h2 {
          font-size: 50px;
        }
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
