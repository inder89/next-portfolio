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
  background-color: #577ee9;
  color: var(--white);
  padding: 1em 1em;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 8%;
  text-align: center;
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
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
        integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
        crossOrigin="anonymous"
      />
    </Head>
    <div className="top">
      <div className="hours">
        <h5>
          Opening hours: Mon-Wed 9:00 - 5:30 / Thurs 9:00 - 6:00 / Sat 9:00 -
          12:00
        </h5>
      </div>

      <div className="icon">
        <img src="../static/facebook.png" alt="" height="80px" width="80px" />
      </div>

      <header className="main-header">
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
      </header>
    </div>

    {children}

    <footer>
      &copy;
      {new Date().getFullYear()}
    </footer>
    <style jsx>
      {`
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

        .wrapper {
          display: grid;
          grid-gap: 20px;
        }
        .top {
          display: grid;
          grid-gap: 20px;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: repeat(auto);
          grid-template-areas:
            'hours hours hours icon'
            'main-header main-header main-header main-header';
        }
        .hours {
          grid-area: hours;
          justify-self: center;
        }
        .icon {
          grid-area: icon;
          font-size: 10px;
          justify-self: center;
        }
        .main-header {
          grid-area: main-header;
        }
        .logo {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .logo .logo_text {
          font-family: 'Raleway', sans-serif;
          font-size: 1.267em;
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

        .main-nav ul {
          display: grid;
          padding: 0;
          margin: 20px 0;
          list-style-type: none;
          grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
          grid-gap: 20px;
        }

        .main-nav a {
          display: block;
          text-decoration: none;
          text-transform: uppercase;
          padding: 20px;
          text-align: center;
          color: #212b02;
          font-size: 20px;
          border-radius: 8%;
        }
        .main-nav a:hover {
          background-color: #577ee9;
          padding: 1em 1em;
          color: var(--white);
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
