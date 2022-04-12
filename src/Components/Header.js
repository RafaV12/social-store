import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

function Header() {
  const [showNav, setShowNav] = useState(false);
  const closeMenu = () => setShowNav(false);

  return (
    <header className="sticky top-0 px-4 h-14 w-full flex items-center justify-between rounded-b-lg bg-white z-10 shadow-md">
      <i
        className="fa-solid fa-ellipsis z-40"
        role="button"
        onClick={() => setShowNav(!showNav)}
      />
      {showNav && <NavBar close={closeMenu} />}
      <Link to="/">
        <img
          className="ml-6 h-32"
          src="https://i.ibb.co/GtCNVMN/logo.png"
          alt="logo"
        />
      </Link>
      <div className="flex">
        <i className="mr-3 fa-solid fa-magnifying-glass text-lg" />
      </div>
    </header>
  );
}

export default Header;
