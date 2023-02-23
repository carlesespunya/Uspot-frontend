import HomeSectionCard from './HomeSectionCard';
import React from "react";
import Carousel from "../../components/ui/Carousel";

export default function HomeSection({ section }) {
  return (
    <div className="home-section">
      <h2 className="home-section-title">{section.header}</h2>
      <Carousel>
        {section.data.map(option => {
          return <HomeSectionCard option={option} key={option.key} />
        })}
      </Carousel>
    </div>
  );
}
