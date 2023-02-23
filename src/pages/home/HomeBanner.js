import React from "react";
import homeBannerLogo from '../../assets/homeBannerLogo.svg'
import homeBanner from '../../assets/homeBanner.jpg'

export default function HomeBanner() {
  return (
    <div className="home-banner" style={{ backgroundImage: `url(${homeBanner})` }}>
      <div className="home-banner-out-box">
        <div className="home-banner-box">
          <img src={homeBannerLogo} alt="Banner Logo" />
          <h1 className="home-banner-title">Live experiences through sport</h1>
        </div>
      </div>
    </div>
  );
}
