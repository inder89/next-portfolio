import Link from 'next/link';
import Layout from '../components/Layout';

export default () => (
  <Layout>
    <div className="full">
      <div className="half">
        <section className="content">
          <h2>Find the perfect lens for you.</h2>
          <p>
            Our contact lenses are very competitively priced to give you the
            cheapest lenses in Coffs Harbour.
          </p>
          <Link href="/contact">
            <a>Contact Us</a>
          </Link>
        </section>
        <img src="../static/AdobeStock_180410767-1024x701.jpeg" alt="" />
      </div>
      <div className="half">
        <img src="../static/AdobeStock_144856281.jpeg" alt="" />
        <section className="content">
          <h2>Sunglasses</h2>
          <p>
            Most designer sunglasses can be fitted with prescription lenses to
            ensure you enjoy clear, comfortable vision and still look trendy.
          </p>
          <p>
            Our entire range of sunglasses meet the Australian standard for UV
            protection.
          </p>
          <Link href="/">
            <a>Shop Now</a>
          </Link>
        </section>
      </div>
    </div>
    <style jsx>
      {`
        .full {
          width: 60%;
          display: flex;
          justify-content: space-evenly;
          height: 40em;
          flex-direction: column;
          margin: 0 auto;
          padding: 2rem 0;
        }
        div .half {
          display: flex;
          height: 20em;
        }
        .content {
          flex-basis: 70%;
          display: flex;
          align-self: center;
          flex-flow: column;
          justify-content: unsafe;
          align-items: unset;
          padding: 1em 1em;

          height: 20em;
        }
        section p {
          word-break: break-all;
          font-size: 120%;
          line-height: 1.5rem;
        }
        section h2 {
          font-size: 200%;
        }
        .content a {
          padding: 0.5em;
          text-decoration: none;
          text-transform: uppercase;
          border-radius: 8%;
          text-align: center;
          background-color: #4b7447;
          color: #fff;
          font-size: 1.5vw;
          align-self: center;
        }
        .content a:hover {
          padding: 0.5em 0.7em;
          background-color: #fff;
          border: 2px solid #4b7447;
          color: #121111;
        }
        .half img {
          width: 30%;
        }
      `}
    </style>
  </Layout>
);
