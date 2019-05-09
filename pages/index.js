/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import Carousel from 'nuka-carousel';
import Layout from '../components/Layout';

const Index = () => {
  return (
    <Layout>
      <Carousel
        autoplay={false} // TODO change it to true later
        wrapAround={true}
        animation="zoom"
        zoomScale={0.2}
        withoutControls={false}
        slideWidth={0.5}
        speed={900}
        cellSpacing={20}
        dragging={true}
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
      <h2>Full Scope Optometric Services</h2>
      <style jsx>
        {`
          .image {
            position: relative;
          }
        `}
      </style>
    </Layout>
  );
};
export default Index;
