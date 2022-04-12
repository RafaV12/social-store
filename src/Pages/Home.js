import React from 'react';
import SocialSlider from '../Components/Home/SocialSlider';
import Recommended from '../Components/Home/Recommended';
import SocialAccounts from '../Components/Home/SocialAccounts';

function Home() {
  return (
    <div className="flex flex-col">
      <SocialSlider />
      <Recommended />
      <SocialAccounts />
    </div>
  );
}

export default Home;
