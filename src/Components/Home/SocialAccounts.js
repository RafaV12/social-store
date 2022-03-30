import React from 'react';

function SocialAccounts() {
  return (
    <div className="mt-7 flex flex-col border-2">
      <p className="pl-4 font-semibold text-lg">All ( Social ) Accounts</p>
      <div className="mt-5 flex flex-wrap justify-center">
        <div className="m-2 h-64 w-44 border-2">
          item 1
        </div>
        <div className="m-2 h-64 w-44 border-2">
          item 2
        </div>
        <div className="m-2 h-64 w-44 border-2">
          item 3
        </div>
        <div className="m-2 h-64 w-44 border-2">
          item 4
        </div>
      </div>
    </div>
  );
}

export default SocialAccounts;
