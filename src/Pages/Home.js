import React, { useState, useEffect } from 'react';
import LandingPage from '../Components/Home/LandingPage';
import SocialSlider from '../Components/Home/SocialSlider';
import SocialAccounts from '../Components/Home/SocialAccounts';
import TextContent from '../Components/Home/TextContent';
import Reviews from '../Components/Home/Reviews';
import Footer from '../Components/Footer';
import ScrollTopBtn from '../Components/ScrollTopBtn';

function Home() {
  // Scroll to Top button
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    // This NEEDS a clean up func!
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  return (
    <>
      <div className="flex flex-col">
        <LandingPage />
        <SocialSlider />
        <SocialAccounts />
        <TextContent />
        <Reviews />
        {showTopBtn && <ScrollTopBtn />}
      </div>
      <Footer />
    </>
  );
}

export default Home;
