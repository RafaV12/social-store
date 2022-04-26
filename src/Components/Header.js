import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from './NavBar';

function Header() {
  const [showNav, setShowNav] = useState(false);
  const closeMenu = () => setShowNav(false);

  return (
    <header className="absolute top-0 px-4 h-14 w-full flex items-center justify-between z-10 lg:left-1/2 lg:transform lg:-translate-x-1/2 xl:container">
      <div className="flex items-center md:hidden">
        {/* Burger menu */}
        <i
          className="fa-solid fa-bars z-30 text-xl text-purple-400"
          role="button"
          onClick={() => setShowNav(!showNav)}
        />

        {/* User profile picture */}
        {/* <i className="ml-4 fa-solid fa-circle-user text-2xl" /> */}
      </div>

      {/* Destkop Navigation links */}
      <ul className="hidden w-2/4 justify-around items-center font-semibold text-gray-600 text-sm md:flex">
        <NavLink
          to="/"
          className={(isActive) => `${isActive.isActive && 'text-xl text-blue-400'}`}
        >
          <li>
            Explore
          </li>
        </NavLink>
        <NavLink
          to="/dashboard"
          className={(isActive) => `${isActive.isActive && 'text-xl text-blue-400'}`}
        >
          <li>
            Dashboard
          </li>
        </NavLink>
        <NavLink
          to="/signup"
          className={(isActive) => `${isActive.isActive ? 'text-xl text-blue-400' : 'text-purple-400'}`}
        >
          <li>
            Sign up!
          </li>
        </NavLink>
        <NavLink
          to="/how-it-works"
          className={(isActive) => `${isActive.isActive && 'text-xl text-blue-400'}`}
        >
          <li>
            How it works
          </li>
        </NavLink>
        <NavLink
          to="/about"
          className={(isActive) => `${isActive.isActive && 'text-xl text-blue-400'}`}
        >
          <li>
            About us
          </li>
        </NavLink>
        <NavLink
          to="/contact"
          className={(isActive) => `${isActive.isActive && 'text-xl text-blue-400'}`}
        >
          <li>
            Contact us
          </li>
        </NavLink>
      </ul>

      {/* Logo */}
      <NavLink to="/">
        <img
          className="w-16"
          src="https://i.ibb.co/4sq2MT6/acclogo.png"
          alt="logo"
        />
      </NavLink>
      {showNav && <NavBar close={closeMenu} />}
    </header>
  );
}

export default Header;
