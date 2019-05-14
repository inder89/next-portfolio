export default () => (
  <>
    <h2>Contact Info</h2>
    <div className="card">
      <img src="../static/1.png" alt="" height="20px" width="20px" />
      <p>
        <span>Address</span> <br />
        SP017 Toormina Gardens <br />
        Shopping Centre <br />
        Toormina Rd <br />
        Toormina 2452
      </p>
    </div>
    <div className="card">
      <img src="../static/1.png" alt="" height="20px" width="20px" />
      <p>
        <span>Phone</span> <br />
        02 6658 9114 <br />
        02 6658 9117
      </p>
    </div>
    <div className="card hide">
      <img src="../static/1.png" alt="" height="20px" width="20px" />
      <p>
        <span>Fax</span> <br />
        02 66585361
      </p>
    </div>
    <div className="card">
      <img src="../static/1.png" alt="" height="20px" width="20px" />
      <p>
        <span>Email</span> <br />
        info@medioptics.com.au
      </p>
    </div>
    <style jsx>
      {`
        h2 {
          font-size: 200%;
          margin-top: 0px;
          margin-bottom: 0px;
        }
        p {
          padding: 0 1.2rem;
        }
        span {
          font-weight: bold;
          font-size: 125%;
        }
        .card {
          display: flex;
          justify-content: flex-start;
          align-items: baseline;
        }
      `}
    </style>
  </>
);
