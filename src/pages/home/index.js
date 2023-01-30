import './Home.css';
import React from 'react';
import { sports, types, regions } from '../../data/globalData';
import Card from "../../components/ui/Card";
import Carousel from "../../components/ui/Carousel";

export default function Home() {
   return (
      <>
         <div className="home-banner">
            <h1>Live experiences through sport</h1>
         </div>
         <div className="home-sections">
            <div className="home-section">
               <h2 className="home-section-title">Discover our sports</h2>
               <div className="home-section-cards">
                  <Carousel>
                     {sports.map((sport) => {
                        return (
                           <Card>
                              <div className="home-section-card">
                                 <h3>{sport}</h3>
                              </div>
                           </Card>
                        )
                     })}
                  </Carousel>
               </div>
            </div>
            <div className="home-section">
               <h2 className="home-section-title">A wide variety of sport experiences</h2>
               <div className="home-section-cards">
                  <Carousel>
                     {types.map((type) => {
                        return (
                           <Card>
                              <div className="home-section-card">
                                 <h3>{type}</h3>
                              </div>
                           </Card>
                        )
                     })}
                  </Carousel>
               </div>
            </div>
            <div className="home-section">
               <h2 className="home-section-title">Locations</h2>
               <div className="home-section-cards">
                  <Carousel>
                     {regions.map((region) => {
                        return (
                           <Card>
                              <div className="home-section-card">
                                 <h3>{region}</h3>
                              </div>
                           </Card>
                        )
                     })}
                  </Carousel>
               </div>
            </div>
         </div>
      </>

   )
}
