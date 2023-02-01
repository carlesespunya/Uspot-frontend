import React from "react";
import { types, eventStatus } from '../../data/globalData';

export default function ExperiencesCardTop({ event }) {
   return (
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
   );
}
