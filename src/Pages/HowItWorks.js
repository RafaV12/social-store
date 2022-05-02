import React from 'react';
import { Link } from 'react-router-dom';
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
          <p className="mt-1 text-sm text-gray-600">There are only 5 easy steps to get your new social media account.</p>
        </div>
      </div>

      {/* Steps Container */}
      <div className="p-6 pt-16 flex flex-col items-center container md:px-7">
        {/* Step 1 */}
        <div className="mb-14 flex flex-col md:flex-row md:items-center md:justify-between">
          <img src={step1} alt="" className="h-80 w-64 self-center md:w-1/3" />
          <div className="hidden h-14 w-14 text-2xl tracking-wider font-bold rounded-lg shadow-md md:flex md:justify-center md:items-center">1.</div>
          <div className="md:-mt-10 md:w-1/3">
            <span className="text-2xl font-bold md:hidden">1.</span>
            <h3 className="text-2xl font-bold">Buy the account or drop your offer</h3>
            <p className="mt-2 text-gray-600">
              Once you choose your account among 12 different categories, you can hit
              the buy now button or drop your offer.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="mb-14 flex flex-col md:flex-row md:items-center md:justify-between">
          <img src={step2} alt="" className="h-64 w-full self-center md:w-1/3 md:order-last" />
          <div className="hidden h-14 w-14 text-2xl tracking-wider font-bold rounded-lg shadow-md md:flex md:justify-center md:items-center md:order-2">2.</div>
          <div className="mt-2 md:-mt-10 md:w-1/3 md:order-1">
            <span className="text-2xl font-bold md:hidden">1.</span>
            <h3 className="text-2xl font-bold">Buy the account or drop your offer</h3>
            <p className="mt-2 text-gray-600">
              Once you choose your account among 12 different categories, you can hit
              the buy now button or drop your offer.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="mb-14 flex flex-col md:flex-row md:items-center md:justify-between">
          <img src={step3} alt="" className="h-80 w-64 self-center md:w-1/3" />
          <div className="hidden h-14 w-14 text-2xl tracking-wider font-bold rounded-lg shadow-md md:flex md:justify-center md:items-center">3.</div>
          <div className="md:-mt-10 md:w-1/3">
            <span className="text-2xl font-bold md:hidden">1.</span>
            <h3 className="text-2xl font-bold">Buy the account or drop your offer</h3>
            <p className="mt-2 text-gray-600">
              Once you choose your account among 12 different categories, you can hit
              the buy now button or drop your offer.
            </p>
          </div>
        </div>

        {/* Step 4 */}
        <div className="mb-14 flex flex-col md:flex-row md:items-center md:justify-between">
          <img src={step4} alt="" className="h-80 w-64 self-center md:w-1/3 md:order-last" />
          <div className="hidden h-14 w-14 text-2xl tracking-wider font-bold rounded-lg shadow-md md:flex md:justify-center md:items-center md:order-2">4.</div>
          <div className="md:-mt-10 md:w-1/3 md:order-1">
            <span className="text-2xl font-bold md:hidden">1.</span>
            <h3 className="text-2xl font-bold">Buy the account or drop your offer</h3>
            <p className="mt-2 text-gray-600">
              Once you choose your account among 12 different categories, you can hit
              the buy now button or drop your offer.
            </p>
          </div>
        </div>

        {/* Step 5 */}
        <div className="mb-14 flex flex-col md:flex-row md:items-center md:justify-between">
          <img src={step5} alt="" className="h-80 w-64 self-center md:w-1/3" />
          <div className="hidden h-14 w-14 text-2xl tracking-wider font-bold rounded-lg shadow-md md:flex md:justify-center md:items-center">5.</div>
          <div className="md:-mt-10 md:w-1/3">
            <span className="text-2xl font-bold md:hidden">1.</span>
            <h3 className="text-2xl font-bold">Buy the account or drop your offer</h3>
            <p className="mt-2 text-gray-600">
              Once you choose your account among 12 different categories, you can hit
              the buy now button or drop your offer.
            </p>
          </div>
        </div>
      </div>

      {/* Contact us box */}
      <div className="mt-7 px-7 py-4 mb-16 w-4/5 h-64 flex flex-col items-center justify-center bg-white rounded-lg shadow-md self-center md:w-2/4 xl:w-1/4">
        <p className="text-3xl text-center font-semibold">Couldn't find the answer to your question?</p>
        <Link to="/contact" className="mt-6 px-2 py-3 w-3/4 text-center bg-purple-600 text-white rounded-full">Contact us</Link>
      </div>
      <Footer />
    </div>
  );
}

export default HowItWorks;
