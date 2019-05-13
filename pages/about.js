import Link from 'next/link';
import Layout from '../components/Layout';

export default () => (
  <Layout>
    <section className="content">
      <div className="left-side">
        <h2>About Us</h2>
        <p>At Medioptics in Coffs Harbour we truly care about your vision.</p>
        <p>
          Our family optometry practice was originally established in 1988 and
          located at the Palms Centre at the top of the escalators. Fast forward
          to 2009 and we moved to our current location at the Toormina Gardens
          Shopping Centre.
        </p>
        <p>
          We pride ourselves on offering eye testing and spectacle prescriptions
          that don’t to cost a fortune. All eye examinations are bulk-billed to
          Medicare. You may even be eligible to take advantage of Vision
          Australia’s NSW free spectacles program. For eligibility requirements
          and how to apply click here.
        </p>
        <p>
          Along with big brand sunglasses and trendy spec frames, we stock a
          huge range of contacts lenses for immediate delivery. If you’ve never
          worn contact lenses before, but are keen to try, book a consultation
          and we’ll let you try a free pair before you buy.
        </p>
        <p>
          Getting new glasses is a big deal, so let us help you make the
          experience a stress-free one.
        </p>
        <p>
          Call or visit us today to book your same-day appointment with
          Medioptics now.
        </p>
      </div>
      <div className="right-side">
        <h2>Greg Luke</h2>
        <img src="/static/greg.jpg" alt="this is the owner" height="200px" />
        <p>
          Greg Luke has serviced the local Coffs Harbour community for more than
          25 years. Greg does all the eye tests. He knows what it takes to put
          you at ease and provides honest, unbiased advice. He’ll help you
          choose frames that flatter your face shape and won’t push you into
          buying any add-ons that aren’t entirely necessary.
        </p>
        <p>
          Greg also repairs and builds 99 percent of all spectacles at our
          Toormina premises (except rimless glasses). If you need single focus
          lenses, chances are you will have your new specs the very same day!
        </p>
      </div>
    </section>
    <style jsx>
      {`
        .content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-column-gap: 2rem;
          padding: 3rem;
        }
        .left-side {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        p:first-of-type {
          align-self: flex-start;
        }

        .right-side {
          display: flex;
          align-items: center;
          flex-direction: column;
        }
        .right-side img {
          border-radius: 50%;
          border: 10px solid darkgrey;
        }
        p {
          line-height: 1.8rem;
        }
        h2 {
          font-size: 200%;
        }
      `}
    </style>
  </Layout>
);
