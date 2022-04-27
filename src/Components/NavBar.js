import React from 'react';
import { NavLink } from 'react-router-dom';
import { useGlobalContext } from '../Context/appContext';

function NavBar({ close }) {
  const { user } = useGlobalContext();
  return (
    <nav
      className="fixed top-0 p-4 h-screen w-full left-0 top-0 bg-white z-30 overflow-auto"
    >
      {/* Close button */}
      <i role="button" className="fa-solid fa-xmark text-2xl text-gray-700" onClick={close} />

      {/* Navigation links */}
      <ul className="mt-10 h-3/5 text-gray-700 text-xl overflow-hidden">
        <NavLink
          to="/"
          className={(isActive) => `${isActive.isActive && 'text-lg text-black'}`}
          onClick={close}
        >
          <li className="mb-2">
            Explore
          </li>
        </NavLink>

        { user && (
        <NavLink
          to="/dashboard"
          className={(isActive) => `${isActive.isActive && 'text-lg text-black'}`}
          onClick={close}
        >
          <li className="mb-2">
            Dashboard
          </li>
        </NavLink>
        )}

        { !user && (
        <NavLink
          to="/signup"
          className={(isActive) => `${isActive.isActive ? 'text-lg text-black' : 'text-green-400'}`}
          onClick={close}
        >
          <li className="mb-2">
            Sign up!
          </li>
        </NavLink>
        )}

        <NavLink
          to="/how-it-works"
          className={(isActive) => `${isActive.isActive && 'text-lg text-black'}`}
          onClick={close}
        >
          <li className="mb-2">
            How it works
          </li>
        </NavLink>

        <NavLink
          to="/about"
          className={(isActive) => `${isActive.isActive && 'text-lg text-black'}`}
          onClick={close}
        >
          <li className="mb-2">
            About
          </li>
        </NavLink>

        <NavLink
          to="/contact"
          className={(isActive) => `${isActive.isActive && 'text-lg text-black'}`}
          onClick={close}
        >
          <li className="mb-2">
            Contact us
          </li>
        </NavLink>
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
          { !user && (
          <NavLink to="/login" className="w-2/4" onClick={close}>
            <button type="button" className="w-full h-12 font-bold text-blue-600 bg-blue-200 rounded-full">Sign in</button>
          </NavLink>
          )}
        </div>
      </div>
    </nav>

  );
}

export default NavBar;
