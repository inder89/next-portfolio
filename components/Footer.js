import Link from 'next/link';
import styled from 'styled-components';
import Logo from './Logo';
import Blog from './Blog';
import ContactCard from './ContactCard';

const StyledContact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 100%;
  margin-top: 0;
  margin-bottom: 0;

  & ${ContactCard}:nth-child(4) div.hide {
    display: none;
  }
`;

export default () => (
  <footer>
    <div>
      <Link href="/">
        <Logo />
      </Link>
      <p>
        We believe in complete and full ocular health examinations to evaluate
        major components of your vision.
      </p>

      <img src="../static/facebook.png" alt="" height="40px" width="40px" />
    </div>

    <ul className="footer-nav-list">
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
    </ul>
    <Blog />
    <StyledContact>
      <ContactCard />
    </StyledContact>
    <p>
      Greg Luke Optometrist &copy;
      {new Date().getFullYear()}
    </p>
    <style jsx>
      {`
        footer {
          display: grid;
          padding: 0 5rem;
          grid-template-columns: 25% 25% 25% 25%;
          align-items: flex-start;
        }
        .footer-nav-list {
          display: flex;
          flex-direction: column;
          margin: 0;
          justify-content: space-around;
          height: 12rem;
        }
        .footer-nav-list a {
          text-decoration: none;
          color: black;
        }
        p {
          padding-bottom: 2rem;
        }
      `}
    </style>
  </footer>
);
