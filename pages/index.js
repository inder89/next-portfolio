import React from 'react';
import Carousel from 'nuka-carousel';
import Layout from '../components/Layout';

const Index = () => (
  <Layout title>
    <Carousel>
      <img src="../static/slide1.jpg" alt="slideshow" />
      <img src="../static/slide2.jpg" alt="slideshow" />
      <img src="../static/slide3.jpg" alt="slideshow" />
    </Carousel>
    <h2>Full Scope Optometric Services</h2>
  </Layout>
);
export default Index;
