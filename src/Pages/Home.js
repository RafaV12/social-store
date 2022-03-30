import React from 'react';
import SocialSlider from '../Components/Home/SocialSlider';
import SocialAccounts from '../Components/Home/SocialAccounts';
import Footer from '../Components/Footer';

function Home() {
  return (
    <div className="flex flex-col">
      <SocialSlider />
      <div className="mt-7 flex flex-col border-2">
        <p className="pl-4 font-semibold text-lg">Recommended Account</p>
        <div className="mt-7 h-32 w-72 self-center border-2 bg-gray-800 rounded-lg" />
      </div>
      <SocialAccounts />
      <Footer />
    </div>
  );
}

export default Home;
