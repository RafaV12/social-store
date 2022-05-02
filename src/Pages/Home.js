import React, { useState, useEffect, useRef } from 'react';
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
  // Scroll to Social Slider component using the landing page button
  const socialSliderRef = useRef(null);
  const scrollToElement = () => socialSliderRef.current.scrollIntoView({ behavior: 'smooth' });

  useEffect(() => {
    const displayBtn = () => {
      if (window.scrollY > 100) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener('scroll', displayBtn);

    return () => window.removeEventListener('scroll', displayBtn);
  }, []);

  return (
    <>
      <div className="flex flex-col 2xl:items-center">
        <LandingPage scrollToElement={scrollToElement} />
        <SocialSlider socialSliderRef={socialSliderRef} />
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
