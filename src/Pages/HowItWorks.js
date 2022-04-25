import React from 'react';
import Footer from '../Components/Footer';

// Images
const step1 = require('../Assets/HowItWorks/step-1.png');
const step2 = require('../Assets/HowItWorks/step-2.png');
const step3 = require('../Assets/HowItWorks/step-3.png');
const step4 = require('../Assets/HowItWorks/step-4.png');
const step5 = require('../Assets/HowItWorks/step-5.png');

function HowItWorks() {
  return (
    <div className="flex flex-col items-center">
      {/* Page Header */}
      <div
        style={{
          borderBottomRightRadius: '100px',
          background: '#f0f1ff',
        }}
        className="w-full h-80 flex justify-center items-center"
      >
        <div className="w-72 text-center">
          <p className="uppercase font-bold text-4xl">How it Works</p>
          <p className="mt-1 text-sm">There are only 4 easy steps to get your new social media account.</p>
        </div>
      </div>

      {/* Steps Container */}
      <div className="p-6 pt-16 flex flex-col items-center container md:px-7">
        {/* Step 1 */}
        <div className="mb-14 flex flex-col md:flex-row md:items-center">
          <img src={step1} alt="" className="h-80 w-64 self-center" />
          <div className="md:-mt-10">
            <span className="text-2xl font-bold">1.</span>
            <h3 className="text-2xl font-bold">Buy the account or drop your offer</h3>
            <p className="mt-2">
              Once you choose your account among 12 different categories, you can hit
              the buy now button or drop your offer.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="mb-14 flex flex-col md:flex-row md:items-center">
          <img src={step2} alt="" className="w-full self-center md:order-last md:w-2/4" />
          <div className="md:-mt-10">
            <span className="text-2xl font-bold">2.</span>
            <h3 className="text-2xl font-bold">Buy the account or drop your offer</h3>
            <p className="mt-2">
              Once you choose your account among 12 different categories, you can hit
              the buy now button or drop your offer.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="mb-14 flex flex-col md:flex-row md:items-center">
          <img src={step3} alt="" className="h-80 w-64 self-center" />
          <div>

            <span className="text-2xl font-bold">3.</span>
            <h3 className="text-2xl font-bold">Buy the account or drop your offer</h3>
            <p className="mt-2">
              Once you choose your account among 12 different categories, you can hit
              the buy now button or drop your offer.
            </p>
          </div>
        </div>

        {/* Step 4 */}
        <div className="mb-14 flex flex-col md:flex-row md:items-center">
          <img src={step4} alt="" className="h-80 w-64 self-center md:order-last" />
          <div>
            <span className="text-2xl font-bold">4.</span>
            <h3 className="text-2xl font-bold">Buy the account or drop your offer</h3>
            <p className="mt-2">
              Once you choose your account among 12 different categories, you can hit
              the buy now button or drop your offer.
            </p>
          </div>
        </div>

        {/* Step 5 */}
        <div className="mb-14 flex flex-col md:flex-row md:items-center">
          <img src={step5} alt="" className="h-80 w-64 self-center md:mr-4" />
          <div>

            <span className="text-2xl font-bold">5.</span>
            <h3 className="text-2xl font-bold">Buy the account or drop your offer</h3>
            <p className="mt-2">
              Once you choose your account among 12 different categories, you can hit
              the buy now button or drop your offer.
            </p>
          </div>
        </div>
      </div>

      {/* Contact us box */}
      <div className="mt-7 px-7 py-4 mb-16 w-4/5 h-64 flex flex-col items-center justify-center bg-white rounded-lg shadow-md self-center md:w-2/4 xl:w-1/4">
        <p className="text-3xl text-center font-semibold">Couldn't find the answer to your question?</p>
        <button className="mt-6 px-2 py-3 w-3/4 bg-purple-600 text-white rounded-full" type="button">Contact us</button>
      </div>
      <Footer />
    </div>
  );
}

export default HowItWorks;
