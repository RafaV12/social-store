import React from 'react';

function Recommended() {
  return (
    <div
      className="mt-7 py-7 flex flex-col"
    >
      <p className="pl-4 font-semibold text-lg">Recommended Account</p>
      <div
        style={{
          backgroundImage: 'url(\'https://images.pexels.com/photos/1193743/pexels-photo-1193743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2\')',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        className="py-2 px-3 mt-6 h-32 w-72 self-center rounded-lg"
      >
        <p>Account name</p>
      </div>
    </div>
  );
}

export default Recommended;
