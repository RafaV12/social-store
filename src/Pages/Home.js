import React from 'react';
import SocialSlider from '../Components/Home/SocialSlider';
import Recommended from '../Components/Home/Recommended';
import SocialAccounts from '../Components/Home/SocialAccounts';
import Footer from '../Components/Footer';

function Home() {
  return (
    <div className="flex flex-col">
      <SocialSlider />
      <Recommended />
      <SocialAccounts />
      <Footer />
    </div>
  );
}

export default Home;
