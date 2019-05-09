/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import Carousel from 'nuka-carousel';
import Layout from '../components/Layout';

const Index = () => (
  <Layout>
    <Carousel
      autoplay={true}
      transitionMode="scroll"
      cellAlign="left"
      wrapAround={true}
    >
      <div className="image">
        <img src="../static/slide1.jpg" alt="slideshow" />
        <h1>
          Best
          <br />
          same day
          <br />
          service
        </h1>
      </div>

      <div className="image">
        <img src="../static/slide2.jpg" alt="slideshow" />
      </div>
      <div className="image">
        <img src="../static/slide3.jpg" alt="slideshow" />
      </div>
    </Carousel>
    <h2>Full Scope Optometric Services</h2>
    <style jsx>
      {`
        /* .image {
          postition: relative;
        }
        h1 {
          position: relative;
          top: 200px;
          left: 0;
          width: 100%;
        } */
      `}
    </style>
  </Layout>
);
export default Index;
