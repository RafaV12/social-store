import React from 'react';
import { Link } from 'react-router-dom';

function NavBar({ close }) {
  return (
    <nav
      className="fixed top-0 p-4 h-screen w-full left-0 top-0 bg-white z-30 overflow-auto"
    >
      {/* Close button */}
      <i role="button" className="fa-solid fa-xmark text-2xl text-gray-700" onClick={close} />

      {/* Navigation links */}
      <ul className="mt-10 h-3/5 text-gray-700 text-xl overflow-hidden">
        <Link to="/" onClick={close}>
          <li className="mb-2">
            Explore
          </li>
        </Link>
        <li className="mb-2">My profile</li>
        <Link to="/how-it-works" onClick={close}>
          <li className="mb-2">
            How it works
          </li>
        </Link>
        <li className="mb-2">Suggested</li>
        <Link to="/about" onClick={close}>
          <li className="mb-2">
            About
          </li>
        </Link>
        <Link to="/contact" onClick={close}>
          <li className="mb-2">
            Contact us
          </li>
        </Link>
        <Link to="/signup" onClick={close}>
          <li className="mb-2 text-green-400">
            Sign up!
          </li>
        </Link>
      </ul>

      {/* Navigation socials */}
      <div className="w-full flex flex-col items-center border-t-2 border-gray-100">
        <div className="mt-6 w-full flex justify-around text-xl text-gray-500">
          <i className="fa-brands fa-twitter" />
          <i className="fa-brands fa-facebook-square" />
          <i className="fa-brands fa-google-plus-square" />
          <i className="fa-brands fa-telegram" />
        </div>

        {/* Navigation CTA buttons */}
        <div className="mt-6 w-full flex items-center justify-center">
          <button type="button" className="mr-4 w-2/4 h-12 font-bold text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-full">Sell</button>
          <Link to="/login" className="w-2/4" onClick={close}>
            <button type="button" className="w-full h-12 font-bold text-blue-600 bg-blue-200 rounded-full">Sign in</button>
          </Link>
        </div>
      </div>
    </nav>

  );
}

export default NavBar;
