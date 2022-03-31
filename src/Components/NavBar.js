import React from 'react';

function NavBar() {
  return (
    <nav
      className="absolute p-4 h-screen w-full left-0 top-0 bg-white z-30 nav-animation overflow-auto backdrop-blur-lg"
    >
      {/* Navigation links */}
      <ul className="mt-9 h-3/4 text-gray-700 text-xl overflow-hidden">
        <li className="mb-2">
          Explore
        </li>
        <li className="mb-2">My profile</li>
        <li className="mb-2">Following</li>
        <li className="mb-2">Activity</li>
        <li className="mb-3">How it works</li>
        <li className="mb-3 text-green-400">
          Community
        </li>
        <li className="mb-2">Blog</li>
        <li className="mb-2">Suggested</li>
        <li>Subscribe</li>
      </ul>

      {/* Navigation socials */}
      <div className="mt-4 flex flex-col items-center border-t-2 border-gray-100">
        <div className="mt-6 w-full flex justify-around text-xl text-gray-500">
          <i className="fa-brands fa-twitter" />
          <i className="fa-brands fa-facebook-square" />
          <i className="fa-brands fa-google-plus-square" />
          <i className="fa-brands fa-telegram" />
        </div>

        {/* Navigation CTA buttons */}
        <div className="mt-6 w-full flex items-center justify-center">
          <button type="button" className="mr-4 w-2/4 h-12 font-bold text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-full">Sell</button>
          <button type="button" className="w-2/4 h-12 font-bold text-blue-600 bg-blue-200 rounded-full">Sign in</button>
        </div>
      </div>
    </nav>

  );
}

export default NavBar;