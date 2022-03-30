import React from 'react';
import NavBar from './NavBar';

function Header() {
  return (
    <header className="sticky top-0 px-4 h-14 w-full flex items-center justify-between border-2 rounded-b-lg bg-white z-10">
      <NavBar />
      <img className="ml-6 h-14 w-24" src="https://www.posenfoundation.co.il/wp-content/uploads/2019/02/logo-placeholder-png-3.png" alt="logo" />
      <div className="flex">
        <i className="mr-3 fa-solid fa-magnifying-glass text-lg" />
      </div>
    </header>
  );
}

export default Header;
