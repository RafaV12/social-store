import React from 'react';
import SocialSlider from '../Components/Home/SocialSlider';
import Recommended from '../Components/Home/Recommended';
import SocialAccounts from '../Components/Home/SocialAccounts';
import TextContent from '../Components/Home/TextContent';
import Reviews from '../Components/Home/Reviews';

function Home() {
  return (
    <div className="flex flex-col">
      <SocialSlider />
      <Recommended />
      <SocialAccounts />
      <TextContent />
      <Reviews />
    </div>
  );
}

export default Home;
