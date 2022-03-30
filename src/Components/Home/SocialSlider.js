import React from 'react';

function SocialSlider() {
  return (
    <div className="mt-7 w-full flex overflow-x-auto items-center border-2">
      <div className="m-2 p-2 h-32 min-w-max flex flex-col justify-around bg-white rounded-lg border-2 transform transition duration-500 hover:scale-105 hover:shadow-md">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/502px-Logo_of_YouTube_%282015-2017%29.svg.png"
          alt=""
          className="h-10 w-28 rounded-lg"
        />
      </div>
      <div className="m-2 p-2 h-32 min-w-max flex flex-col justify-around bg-white rounded-lg border-2 transform transition duration-500 hover:scale-105 hover:shadow-md">
        <img
          src="https://globalsew.com/wp-content/uploads/2021/12/59-590993_follow-us-on-instagram-logo-png-clipart.png"
          alt=""
          className="h-12 w-32 rounded-lg"
        />
      </div>
      <div className="m-2 p-2 h-32 min-w-max flex flex-col justify-around bg-white rounded-lg border-2 transform transition duration-500 hover:scale-105 hover:shadow-md">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/32/Facebooklogo.png"
          alt=""
          className="h-12 w-32 rounded-lg"
        />
      </div>
      <div className="m-2 p-2 h-32 min-w-max flex flex-col justify-around bg-white rounded-lg border-2 transform transition duration-500 hover:scale-105 hover:shadow-md">
        <img
          src="https://papeleriaines.files.wordpress.com/2011/08/twitter-logo.png"
          alt=""
          className="h-12 w-32 rounded-lg"
        />
      </div>
    </div>
  );
}

export default SocialSlider;
