import React from 'react'
import { sports, types, regions } from '../../data/globalData'

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
                  {sports.map((sport) => {
                     return (
                        <div className="home-section-card">
                           <h3>{sport}</h3>
                        </div>
                     )
                  })}
               </div>
            </div>
            <div className="home-section">
               <h2 className="home-section-title">A wide variety of sport experiences</h2>
               <div className="home-section-cards">
                  {types.map((sport) => {
                     return (
                        <div className="home-section-card">
                           <h3>{sport}</h3>
                        </div>
                     )
                  })}
               </div>
            </div>
            <div className="home-section">
               <h2 className="home-section-title">Locations</h2>
               <div className="home-section-cards">
                  {regions.map((sport) => {
                     return (
                        <div className="home-section-card">
                           <h3>{sport}</h3>
                        </div>
                     )
                  })}
               </div>
            </div>
         </div>
      </>

   )
}
