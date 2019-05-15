/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import Carousel from 'nuka-carousel';
import MapView from '../components/MapView';
import Layout from '../components/Layout';

export default class Index extends React.Component {
  componentDidUpdate() {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 0);
  }

  render() {
    return (
      <Layout>
        <Carousel
          autoplay={true}
          wrapAround={true}
          // animation="zoom"
          zoomScale={0.2}
          withoutControls={false}
          speed={900}
          cellSpacing={20}
          dragging={true}
          style={{ width: 1330 }}
        >
          <div className="image">
            <img src="../static/slide0.jpg" alt="slideshow" />
          </div>

          <div className="image">
            <img src="../static/slide1.jpg" alt="slideshow" />
          </div>
          <div className="image">
            <img src="../static/slide2.jpg" alt="slideshow" />
          </div>
        </Carousel>
        <section className="content">
          <h2 className="title">Full Scope Optometric Services</h2>
          <p className="inner_content">
            We treat our patients with the most careful and individual approach,
            stylish eye-wear and latest innovations in contact lenses in a
            relaxed and friendly environment.
          </p>
        </section>
        <section className="features">
          <div className="feature">
            <span className="icon">
              <i className="fas fa-book-open" />
            </span>
            <h3>Digital Retina Imagery</h3>
            <p>
              Early detection of diabetes, macular degeneration, glaucoma, high
              blood pressure and other eye diseases is now easier to diagnose
              earlier, thanks...
            </p>
          </div>
          <div className="feature">
            <span className="icon">
              <i className="fa fa-eye" aria-hidden="true" />
            </span>
            <h3>Eye Examinations</h3>
            <p>
              If you can’t remember the last time you had your eyes tested, it’s
              time to book an appointment
            </p>
          </div>
          <div className="feature">
            <img src="https://img.icons8.com/ios/50/000000/goggles-filled.png" />
            <h3>NSW Spectacles Program</h3>
            <p>
              Medioptics is Coffs Harbour’s only agent for Vision Australia’s
              NSW Spectacle Program.
            </p>
          </div>
          <div className="feature">
            <span className="icon">🎵</span>
            <h3>Visual Field Testing</h3>
            <p>
              Early detection of glaucoma is important and may protect you from
              preventable vision loss.
            </p>
          </div>
        </section>
        {/* // TODO Details button component */}
        <div className="mission">
          <p className="inner_content">
            <span className="highlight">Our Mission –</span> <br />
            Medioptics is a family-friendly optometry practice based in Toormina
            and an agent for the Vision Australia Free Spectacle Program
            servicing from Woolgoolga to Nambucca. We offer same-day eye
            appointments, spectacles made on site and a huge range of trendy
            frames, specs and sunglasses. All eye examinations are bulk billed
            to Medicare.
          </p>
        </div>
        <div className="call_to_action">
          <h3>Reordering Contact lenses?</h3>
          <a className="button" href="">
            Contact Us
          </a>
        </div>

        <section className="features">
          <div className="feature">
            <span className="icon">
              <i className="fas fa-book-open" />
            </span>
            <a href="">Opening hours</a>
            <p>
              Opening hours: Mon-Wed 9:00 - 5:30 / Thurs 9:00 - 6:00 / Sat 9:00
              - 12:00
            </p>
          </div>
          <div className="feature">
            <span className="icon">
              <i className="fa fa-eye" aria-hidden="true" />
            </span>
            <a href="">Immediate Spec Service</a>
            <p>
              You will usually get single vision on the same day and bifocals or
              multi focal within 24-48 hours.
            </p>
          </div>
          <div className="feature">
            <img src="https://img.icons8.com/ios/50/000000/goggles-filled.png" />
            <a href="">Optometrist Greg Luke</a>
            <p>Meet our doctors</p>
          </div>
        </section>

        <section className="showcase">
          <div className="aside">
            <h3 className="highlight">
              Range of Sunglasses
              <br />
              Online!
            </h3>
            <div>We offer free delivery to your door!</div>
            <a href="">Click Here Now</a>
          </div>
          <img src="../static/home1_bg2.jpg" alt="woman and a man" />
        </section>
        <section className="gallery">
          <h2 id="heading" className="highlight">
            Glasses Gallery
          </h2>
          <img
            id="image1"
            src="../static/AdobeStock_144856281.jpeg"
            alt="sunglasses"
          />
          <img
            id="image2"
            src="../static/profile-of-woman-wearing-glasses-PMVRYJH.jpg"
            alt="woman wearing glasses"
          />
          <img id="image3" src="../static/spectacles.jpg" alt="spectacles" />
          <img
            id="image4"
            src="../static/AdobeStock_41201210.jpeg"
            alt="woman and lens"
          />
          <a id="button" href="#">
            Visit Our Gallery
          </a>
        </section>
        <MapView height="25em" />
        <style jsx>
          {`
            .content {
              text-align: center;
            }

            .inner_content {
              line-height: 1.7em;
              font-size: 1.2em;
              color: #47433f;
              text-align: center;
              text-justify: inter-word;
              margin: 0 50px;
              max-width: 80%;
            }

            .features {
              display: grid;
              grid-gap: 20px;
              grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            }

            .feature {
              background: #fff;

              padding: 10px;
              border: 2px solid black;
              text-align: center;
              box-shadow: 0 0 4px rgba(0, 0, 0, 1);
            }

            .feature:hover {
              background: #2a7c1c;
              border: none;
              box-shadow: 0 0 0 rgba(0, 0, 0, 1);
              color: #fff;
            }
            .feature .icon {
              font-size: 50px;
            }
            .cover {
              display: block;
              width: auto;
              height: auto;
              max-width: 100%;
              max-height: 90%;
              margin: 20px auto;
            }

            .mission {
              position: relative;
              width: 100%;
              height: 100vh;
              background-image: url('../static/pexels-photo.jpg');
              background-repeat: no-repeat;
              background-position: center;
              background-size: cover;
              text-shadow: 2px 2px 8px #111;
            }
            .highlight {
              font-size: 200%;
              margin: 1rem 0;
              display: block;
            }
            /* // TODO hide text at 860 breakpoint  */
            .mission .inner_content {
              position: absolute;
              padding: 0 20px;
              bottom: 10%;
              left: 0;
              line-height: 200%;
              width: 60%;
              color: white;
              font-size: 130%;
            }
            .call_to_action {
              display: flex;
              justify-content: space-around;
              background: #2a7c1c;
              border: 2px solid black;
              color: #fff;
            }

            .call_to_action a {
              text-decoration: none;
              text-transform: uppercase;
              padding: 20px;
              text-align: center;
              color: #fff;
              font-size: 20px;
            }
            .call_to_action a:hover {
              background-color: white;
              padding: 1em 1em;
              color: #000;
              border-radius: 8%;
            }
            .showcase {
              display: grid;
              grid-template-columns: 50% auto;
            }
            .showcase .aside {
              display: flex;
              flex-direction: column;
              justify-content: space-evenly;
              align-items: center;
              padding: 20px;
            }
            .showcase .aside a {
              padding: 20px;
              text-decoration: none;
              text-transform: uppercase;
              border-radius: 8%;
              text-align: center;
              background-color: #4b7447;
              color: #fff;
              font-size: 1.5vw;
            }
            .showcase .aside a:hover {
              padding: 0.5em 0.7em;
              background-color: #fff;
              border: 3px solid #4b7447;
              color: #121111;
            }
            .showcase img {
              width: 100%;
            }

            .gallery {
              display: grid;
              grid-template-columns: 40% 20% 40%;
              justify-items: center;
              grid-template-rows: 20% 30% 30% 20%;
              height: 40em;
              align-items: center;
              grid-template-areas:
                'heading heading heading'
                'image1 image2 image4'
                'image1 image3 image4'
                'button button button';
            }
            #heading {
              grid-area: heading;
            }
            #image1 {
              grid-area: image1;
              height: 28vw;
            }
            #image2 {
              grid-area: image2;
              height: 14vw;
            }
            #image3 {
              grid-area: image3;
              height: 14vw;
            }
            #image4 {
              grid-area: image4;
              height: 28vw;
            }
            #button {
              grid-area: button;
              padding: 1rem 1rem;
              text-decoration: none;
              text-transform: uppercase;
              border-radius: 8%;

              text-align: center;
              background-color: #4b7447;
              color: #fff;
              font-size: 1.2vw;
            }
            #button:hover {
              padding: 0.7em 0.7em;
              background-color: #fff;
              border: 3px solid #4b7447;
              color: #121111;
            }
            .gallery img {
              width: 100%;
              height: auto;
            }
          `}
        </style>
      </Layout>
    );
  }
}
