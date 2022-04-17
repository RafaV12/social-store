import React from 'react';

function Footer() {
  return (
    <footer
      style={{
        backgroundImage: 'url("https://blogdotpablofaindotcom.files.wordpress.com/2021/03/cb936-69426-footer-background.jpg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      className="p-4 w-full"
    >
      {/* Footer Content */}
      <div className="mt-7">
        {/* Menu Div */}
        <div className="mb-9">
          <p className="text-green-500 text-lg font-semibold">Menu</p>
          <p className="text-gray-400">Categories</p>
          <p className="text-gray-400">Followers</p>
          <p className="text-gray-400">Escrow Service</p>
          <p className="text-gray-400">Sell</p>
        </div>

        {/* Info Div */}
        <div className="mb-9">
          <p className="text-green-500 text-lg font-semibold">Info</p>
          <p className="text-gray-400">How it Works</p>
          <p className="text-gray-400">Blog</p>
          <p className="text-gray-400">Contact</p>
        </div>

        {/* Company Div */}
        <div className="mb-9">
          <p className="text-green-500 text-lg font-semibold">Company</p>
          <p className="text-gray-400">About us</p>
          <p className="text-gray-400">Terms of Service</p>
          <p className="text-gray-400">Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
