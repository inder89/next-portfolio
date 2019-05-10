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
  color: #f1fe4b;
  padding: 0.6em 1em;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 8%;
  text-align: center;
  background-color: #4b7447;
  color: #fff;
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
        <img src="../static/facebook.png" alt="" height="40px" width="40px" />
      </div>

      <header className="main-header">
        <nav className="main-nav">
          <ul className="main-nav-list">
            <Link href="/">
              <a id="logo">
                <img
                  className="logo_main"
                  src="../static/eyeman.png"
                  alt="Eye Guy"
                  width="93"
                  height="95"
                />
              </a>
            </Link>
            <div className="logo_full">
              <div className="logo_text">Greg Luke Optometrist</div>
              <div className="logo_slogan">optometry</div>
            </div>
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

          font-size: calc(16px + 3vw);
        }
        *,
        *:before,
        *:after {
          -webkit-box-sizing: inherit;
          -moz-box-sizing: inherit;
          box-sizing: inherit;
        }
        * {
          text-decoration: none;
          list-style-type: none;
        }

        .wrapper {
          display: grid;
          grid-gap: 20px;
        }
        .top {
          display: grid;

          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: 80px 80px auto;
          grid-template-areas:
            'hours hours hours icon'
            'main-header main-header main-header main-header';
        }
        .hours {
          grid-area: hours;
          justify-self: center;
          font-size: 1.5rem;
        }
        .icon {
          grid-area: icon;
          font-size: 1rem;
          justify-self: center;
        }
        .main-header {
          grid-area: main-header;
        }

        #logo:hover {
          background: none;
        }
        .logo_text {
          font-family: 'Roboto', sans-serif;
          font-size: 1.267em;
          line-height: 1em;
          font-weight: 600;
        }

        .logo_full {
          display: inline-block;
          max-width: 170px;
          padding-top: 15px;
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

        .main-nav-list {
          grid-area: main-header;
          display: grid;
          padding: 0;
          margin: 0 auto;

          list-style-type: none;
          grid-template-columns: repeat(auto-fit, minmax(30px, 1fr));
          grid-gap: 20px;

          align-items: self-start;
        }

        .main-nav a {
          display: block;
          margin: 0 auto;
          text-transform: uppercase;
          padding: 20px;
          text-align: center;
          color: #212b02;
          font-size: 20px;
          border-radius: 8%;
        }
        .main-nav a:hover {
          background-color: #fff;
          padding: 0.5em 0.7em;

          color: #121111;
          border: 3px solid #4b7447;
        }
        .main-nav > ul:lastchild > a:hover {
          border: 3px solid #4b7447;
        }

        footer {
          padding: 1em;
        }

        @media (min-width: 960px) {
          .main-header .container {
            justify-content: space-between;
          }
        }

        @media (min-height: 500px) {
          .main-header {
            position: sticky;
            top: 0;
            /*other styles*/
          }
        }
      `}
    </style>
  </div>
);
