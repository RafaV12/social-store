import React from 'react';
import LandingPage from '../Components/Home/LandingPage';
import SocialSlider from '../Components/Home/SocialSlider';
import SocialAccounts from '../Components/Home/SocialAccounts';
import TextContent from '../Components/Home/TextContent';
import Reviews from '../Components/Home/Reviews';

function Home() {
  return (
    <div className="flex flex-col">
      <LandingPage />
      <SocialSlider />
      <SocialAccounts />
      <TextContent />
      <Reviews />
    </div>
  );
}

export default Home;
