import React from "react";
import Card from "../../components/ui/Card";
import Carousel from "../../components/ui/Carousel";

export default function HomeSection({ section }) {
   return (
      <div className="home-section">
         <h2 className="home-section-title">{section.header}</h2>
         <div className="home-section-cards">
            <Carousel>
               {section.data.map(option => {
                  return <Card>
                     <div className="home-section-card">
                        <h3>{option.name}</h3>
                     </div>
                  </Card>;
               })}
            </Carousel>
         </div>
      </div>
   );
}
