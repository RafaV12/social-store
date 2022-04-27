import React from 'react';

function LandingPage() {
  return (
    <div
      style={{
        borderBottomRightRadius: '100px',
        background: '#f0f1ff',
      }}
      className="px-10 min-h-screen w-full flex flex-col justify-center overflow-hidden lg:items-center"
    >
      <div className="-mt-32 container lg:-mt-12">
        <p className="uppercase text-sm font-semibold gradient-text">It's a long established fact</p>
        <h1 className="mt-2 uppercase text-5xl font-semibold lg:w-3/5">
          The social media store of choice
        </h1>
        <p className="mt-4 text-lg text-gray-600 lg:w-2/4">
          We filter all the social media accounts for sale to make sure you get real followers
          who engage with your content
        </p>
        <button className="py-2 mt-7 w-64 lp-button text-white outline-none rounded-full cursor-pointer" type="button">Let's Start!</button>
      </div>
    </div>
  );
}

export default LandingPage;
