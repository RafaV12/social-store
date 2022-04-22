import React from 'react';

function Footer() {
  return (
    <footer
      style={{
        backgroundImage: 'url("https://i.pinimg.com/564x/47/33/6e/47336e15fd7522b8ea92210dfff113e6.jpg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="p-4 w-full"
    >
      {/* Footer Content */}
      <div className="mt-7">
        {/* Menu Div */}
        <div className="mb-9">
          <p className="text-purple-500 text-lg font-semibold">Menu</p>
          <p className="text-white">Categories</p>
          <p className="text-white">Followers</p>
          <p className="text-white">Escrow Service</p>
          <p className="text-white">Sell</p>
        </div>

        {/* Info Div */}
        <div className="mb-9">
          <p className="text-purple-500 text-lg font-semibold">Info</p>
          <p className="text-white">How it Works</p>
          <p className="text-white">Blog</p>
          <p className="text-white">Contact</p>
        </div>

        {/* Company Div */}
        <div className="mb-9">
          <p className="text-purple-500 text-lg font-semibold">Company</p>
          <p className="text-white">About us</p>
          <p className="text-white">Terms of Service</p>
          <p className="text-white">Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
