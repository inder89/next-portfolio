/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React from 'react';

import Router from 'next/router';
import NProgress from 'nprogress';

import Nav from './Nav';
import Footer from './Footer';

Router.onRouteChangeStart = url => {
  console.log('url');
  NProgress.start(); // start the loading icon
};

// call the done method when route change is complete
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default ({ children }) => (
  <div className="wrapper">
    <Nav />

    {children}
    <Footer />
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

        .wrapper {
          display: grid;
          grid-gap: 60px;
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
