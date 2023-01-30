import './Carousel.css';
import React from 'react';

export default function Carousel(props) {
   return (
      <div className="carousel-container">
         {props.children}
      </div>
   )
}
