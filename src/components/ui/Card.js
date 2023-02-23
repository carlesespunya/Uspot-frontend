import './Card.css';
import React from 'react';

export default function Card(props) {
  return (
    <div className="card-container">
      {props.children}
    </div>
  )
}
