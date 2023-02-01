import React from "react";
import Card from "../../components/ui/Card";
import ExperiencesCardTop from "./ExperiencesCardTop";
import ExperiencesCardBottom from "./ExperiencesCardBottom";

export default function ExperiencesCard({ event }) {
   return (
      <Card>
         <div className="experiences-list-card">
            <ExperiencesCardTop event={event} />
            <ExperiencesCardBottom event={event} />
         </div>
      </Card>
   );
}
