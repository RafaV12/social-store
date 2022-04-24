import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

function Header() {
  const [showNav, setShowNav] = useState(false);
  const closeMenu = () => setShowNav(false);

  return (
    <header className="absolute top-0 px-4 h-14 w-full flex items-center justify-between z-10">
      <div className="flex items-center">
        <i
          className="fa-solid fa-bars z-30 text-xl text-purple-400"
          role="button"
          onClick={() => setShowNav(!showNav)}
        />

        {/* User profile picture */}
        {/* <i className="ml-4 fa-solid fa-circle-user text-2xl" /> */}
      </div>

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
