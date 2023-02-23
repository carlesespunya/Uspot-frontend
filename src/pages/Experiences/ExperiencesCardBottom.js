import React from "react";
import FormattedDate from '../../utils/FormattedDate';

export default function ExperiencesCardBottom({ event }) {
  return (
    <div className="experiences-list-card-down">
      <h3 className="experiences-list-card-title">{event.title}</h3>
      <p>Start Date: {FormattedDate(event.startDate)}</p>
      <p>End Date: {FormattedDate(event.endDate)}</p>
      <div className="experiences-list-card-down-bot">
        <p className="experiences-list-card-location">{event.location}</p>
        <p className="experiences-list-card-price"><strong>{event.price} €</strong></p>
      </div>
    </div>
  );
}
