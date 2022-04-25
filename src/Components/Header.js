import { useState } from 'react';
import { Link } from 'react-router-dom';
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
      <ul className="hidden md:flex items-center font-semibold w-2/4 justify-around text-gray-600 text-sm">
        <Link to="/">
          <li>
            Explore
          </li>
        </Link>
        <Link to="/dashboard">
          <li>
            Dashboard
          </li>
        </Link>
        <Link to="/signup">
          <li className="text-purple-400">
            Sign up!
          </li>
        </Link>
        <Link to="/how-it-works">
          <li>
            How it works
          </li>
        </Link>
        <Link to="/about">
          <li>
            About
          </li>
        </Link>
        <Link to="/contact">
          <li>
            Contact us
          </li>
        </Link>
      </ul>

      {/* Logo */}
      <Link to="/">
        <img
          className="w-16"
          src="https://i.ibb.co/4sq2MT6/acclogo.png"
          alt="logo"
        />
      </Link>
      {showNav && <NavBar close={closeMenu} />}
    </header>
  );
}

export default Header;
