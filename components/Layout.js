import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import styled from 'styled-components';

const StyledLink = styled.a`
  background-color: #607d8b;
  color: white;
  padding: 1em 1.5em;
  text-decoration: none;
  text-transform: uppercase;
`;

Router.onRouteChangeStart = url => {
  console.log(url);
  NProgress.start(); //start the loading icon
}

//call the done method when route change is complete
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default ({ children, title}) => (
  <div className="root">
    <Head>
      <title>NextPortfolio</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css"/>
    </Head>
    <header>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/services">Services</Link>
      <Link href="/shop">Shop</Link>
      <Link href="/contact">Contact</Link>
      <Link prefetch href="/appointment" passHref>  
        <StyledLink>Make an appointment</StyledLink>
      </Link>

    </header>

    <h1>{title}</h1>
    {children}

    <footer>&copy; {new Date().getFullYear()}</footer>
    <style jsx>{`
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
      *, *:before, *:after {
        -webkit-box-sizing: inherit;
        -moz-box-sizing: inherit;
        box-sizing: inherit;
        }
      header {
        width: 100%;
        display: flex;
        justify-content: space-around;
        padding: 1em;
        font-size: 1.2rem;
        background: #FFEB3B;
      }
      header a {
        color: darkgray;
        text-decoration: none;
      }
      header a: hover {
        font-weight: bold;
        color: lightgray;
      }
      footer {
        padding: 1em;
      }
    `} </style>
    <style global jsx>{`
      body {
        margin: 0;
        font-size: 110%;
        background: #f0f0f0;
      }
    `} </style>
  </div>
)

