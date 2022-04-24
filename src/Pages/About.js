import React from 'react';
import Footer from '../Components/Footer';

function About() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        {/* Page Header */}
        <div
          style={{
            borderBottomRightRadius: '100px',
            background: '#f0f1ff',
          }}
          className="h-80 flex justify-center items-center"
        >
          <div className="w-72 text-center">
            <p className="uppercase font-bold text-4xl">About us</p>
            <p className="mt-1 text-sm">There are only 4 easy steps to get your new social media account.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
