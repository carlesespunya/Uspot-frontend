import React from "react";
import Card from "../../components/ui/Card";

export default function HomeSectionCard({ option }) {
   return (
      <Card>
         <div className="home-section-card" style={{
            backgroundImage: `url(${option.img})`,
            backgroundColor: option.color
         }}>
            <h3 className="home-section-card-title">{option.name}</h3>
         </div>
      </Card>
   );
}
