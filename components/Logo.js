import Link from 'next/link';

export default () => (
  <>
    <Link href="/">
      <a id="logo">
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
      </a>
    </Link>

    <style jsx>
      {`
        #logo:hover {
          background: none;
        }
        .logo_text {
          font-family: 'Roboto', sans-serif;
          font-size: 1.267em;
          line-height: 1em;
          font-weight: 600;
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
        a {
          display: flex;
          text-decoration: none;
          justify-content: flex-start;
        }
        .logo_full {
          display: inline-block;
          max-width: 170px;

          color: black;
        }
      `}
    </style>
  </>
);
