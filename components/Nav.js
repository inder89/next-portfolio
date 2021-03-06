/* eslint-disable react/button-has-type */
import Link from 'next/link';
import Head from 'next/head';
import styled from 'styled-components';
import Logo from './Logo';

const StyledLink = styled.a`
  padding: 0.3rem 0.3rem;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 8%;
  text-align: center;
  background-color: #4b7447;
  color: #fff;
  font-size: 1.2vw;
  &:hover {
    padding: 0.5em 0.7em;
    background-color: #fff;
    border: 3px solid #4b7447;
    color: #121111;
  }
`;

export default () => (
  <>
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
          <button aria-expanded="false" aria-controls="menu-list">
            <span className="open">☰</span>
            <span className="close">×</span>
          </button>
          <ul className="main-nav-list">
            <Link href="/">
              <Logo />
            </Link>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/about">
              <a>About</a>
            </Link>
            <li>
              <a>Services</a>
              <ul className="dropdown">
                <Link href="/services">
                  <a>Our Services</a>
                </Link>
                <Link href="/products">
                  <a>Products</a>
                </Link>
              </ul>
            </li>
            <Link href="/">
              <a>Shop</a>
            </Link>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
            <Link prefetch href="/contact" passHref>
              <StyledLink>Make an appointment</StyledLink>
            </Link>
          </ul>
        </nav>
      </header>
      <style jsx>
        {`
          * {
            text-decoration: none;
            list-style-type: none;
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

          .main-nav-list {
            grid-area: main-header;
            display: grid;
            padding: 0;
            margin: 0 auto;

            list-style-type: none;
            grid-template-columns: repeat(auto-fit, minmax(30px, 1fr));
            grid-gap: 1.5vw;

            align-items: self-start;
          }
            li {
                color: #fff;
                float: left;
                padding-bottom: 1em;
                position: relative;
                text-decoration: none;
                transition-duration: 0.5s;
            }
  
            }
            li:hover {
                cursor: pointer;
            }
            .main-nav-list li ul {
              visibility: hidden;
              opacity: 0;
              position: absolute;
              transition: all 0.5s ease;
              margin-top: 1rem;
              left: 0;
              display: none;
            }
            .main-nav-list li:hover > ul,
            .main-nav-list li ul:hover {
              visibility: visible;
              opacity: 1;
              display: block;
            }
            .dropdown a:hover {
                padding: 0.4em 0;
                font-size: 100%;
                margin: 0.2em 0;
            }

            .main-nav-list li ul li {
              clear: both;
              width: 100%;
            }

          [aria-controls='menu-list'] {
            display: none;
          }

          .main-nav a {
            display: block;
            margin: 0 auto;
            text-transform: uppercase;

            text-align: center;
            color: #212b02;
            font-size: 1.2em;
            border-radius: 8%;
          }
          .main-nav a:hover {
            background-color: #fff;
            padding: 0.5em 0.7em;

            color: #121111;
            border: 3px solid #4b7447;
          }
        `}
      </style>
    </div>
  </>
);
