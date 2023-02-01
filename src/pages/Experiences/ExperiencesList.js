import React from "react";
import ExperiencesCard from './ExperiencesCard';

export default function ExperiencesList({ data }) {
   return (
      <div className="experiences-list">
         <div className="experiences-list-box">
            {data.data.events.map(event => {
               return (
                  <ExperiencesCard event={event} key={event._id} />
               );
            })}
         </div>
      </div>
   );
}
