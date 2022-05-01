import React from 'react';

function SocialSlider() {
  return (
    <>
      <p
        className="px-4 mt-16 gradient-text font-extrabold text-xl md:px-7"
      >
        Select a social network
      </p>
      <div className="mt-3 py-2 pl-3 w-full container flex overflow-x-auto items-center hide-scrollbar md:pl-7">
        {/* Youtube */}
        <div className="m-2 p-2 h-16 min-w-max border flex flex-col justify-around bg-white rounded-lg transform transition duration-500 hover:scale-105 shadow-md cursor-pointer">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/502px-Logo_of_YouTube_%282015-2017%29.svg.png"
            alt=""
            className="h-8 w-20 rounded-lg"
          />
        </div>

        <div className="m-2 p-2 h-16 min-w-max border flex flex-col justify-around bg-white rounded-lg transform transition duration-500 hover:scale-105 shadow-md cursor-pointer">
          <img
            src="https://globalsew.com/wp-content/uploads/2021/12/59-590993_follow-us-on-instagram-logo-png-clipart.png"
            alt=""
            className="h-8 w-20 rounded-lg"
          />
        </div>

        <div className="m-2 p-2 h-16 min-w-max border flex flex-col justify-around bg-white rounded-lg transform transition duration-500 hover:scale-105 shadow-md cursor-pointer">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/32/Facebooklogo.png"
            alt=""
            className="h-8 w-20 rounded-lg"
          />
        </div>

        <div className="m-2 p-2 h-16 min-w-max border flex flex-col justify-around bg-white rounded-lg transform transition duration-500 hover:scale-105 shadow-md cursor-pointer">
          <img
            src="https://papeleriaines.files.wordpress.com/2011/08/twitter-logo.png"
            alt=""
            className="h-8 w-20 rounded-lg"
          />
        </div>
      </div>
    </>
  );
}

export default SocialSlider;
