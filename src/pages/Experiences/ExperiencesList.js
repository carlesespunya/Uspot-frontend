import React from "react";
import Card from "../../components/ui/Card";
import { types, eventStatus } from '../../data/globalData';
import FormattedDate from '../../utils/FormattedDate';

export default function ExperiencesList({ data }) {
   console.log(data)
   return (
      <div className="experiences-list">
         <div className="experiences-list-box">
            {data.data.events.map(event => {
               return <Card key={event._id}>
                  <div className="experiences-list-card">
                     <div className="experiences-list-card-up" style={{ backgroundImage: `url(${event.mediaUrls[0]})` }}>
                        <div className="experiences-list-card-up-top">
                           <div className="experiences-list-card-info" style={{ backgroundColor: types.data.find(type => type.key === event.type).color }}>
                              {types.data.find(type => type.key === event.type).name}
                           </div>
                           <div className="experiences-list-card-info text-white">
                              {event.sport}
                           </div>
                        </div>
                        <div className="experiences-list-card-up-top">
                           <div className="experiences-list-card-user-img" style={{ backgroundImage: `url(${event.user.imageUrl})` }}>
                           </div>
                           <div className="experiences-list-card-info experiences-status-card" style={{ backgroundColor: eventStatus.data.find(status => status.key === event.status).color }}>
                              {eventStatus.data.find(status => status.key === event.status).name}
                           </div>
                        </div>
                     </div>
                     <div className="experiences-list-card-down">
                        <h3 className="experiences-list-card-title">{event.title}</h3>
                        <p>Start Date: {FormattedDate(event.startDate)}</p>
                        <p>End Date: {FormattedDate(event.endDate)}</p>
                        <div className="experiences-list-card-down-bot">
                           <p className="experiences-list-card-location">{event.location}</p>
                           <p className="experiences-list-card-price"><strong>{event.price} €</strong></p>
                        </div>
                     </div>
                  </div>
               </Card>;
            })}
         </div>
      </div>
   );
}
