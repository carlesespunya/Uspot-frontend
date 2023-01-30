import './Home.css';
import React from 'react';
import { sports, types, regions } from '../../data/globalData';
import HomeSection from './HomeSection';
import HomeBanner from './HomeBanner';

export default function Home() {
   return (
      <>
         <HomeBanner />
         <div className="home-sections">
            <HomeSection section={sports} />
            <HomeSection section={types} />
            <HomeSection section={regions} />
         </div>
      </>
   )
}
