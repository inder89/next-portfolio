import React from 'react';
import Carousel from 'nuka-carousel';

const flexCarousel = props => {
  const { className } = props;

  return (
    <Carousel className={className} />
  ); /* * TODO change it to return an expression instead */
};

export default flexCarousel;
