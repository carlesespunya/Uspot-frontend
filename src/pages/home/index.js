import './Home.css';
import React from 'react';
import { sports, types, regions } from '../../data/globalData';
import HomeSection from './HomeSection';
import homeBannerLogo from '../../assets/homeBannerLogo.svg'
import homeBanner from '../../assets/homeBanner.jpg'

export default function Home() {
   return (
      <>
         <div className="home-banner" style={{ backgroundImage: `url(${homeBanner})`}}>
            <div className="home-banner-box">
               <img src={homeBannerLogo} alt="Banner Logo" />
               <h1 className="home-banner-title">Live experiences through sport</h1>
            </div>
         </div>
         <div className="home-sections">
            <HomeSection section={sports} />
            <HomeSection section={types} />
            <HomeSection section={regions} />
         </div>
      </>

   )
}
