import React from 'react';

function HowTo() {
  return (
    <div className="py-6 border-t-2 border-b-2 mt-32">
      {/* Step 1 */}
      <div className="mb-7 flex items-center">
        <img className="mr-4 w-20 h-20" src="http://www.clker.com/cliparts/K/W/6/8/z/y/number-one-tech-support-hi.png" alt="number-1" />
        <div>
          <p className="font-semibold">Step 1</p>
          <p>
            It is a long established fact that a reader will be distracted by the readable
            content of a page when looking at its layout.
          </p>
        </div>
      </div>

      {/* Step 2 */}
      <div className="mb-7 flex items-center">
        <img className="mr-4 w-20 h-20" src="http://www.clker.com/cliparts/9/b/2/A/K/w/purple-number-two-hi.png" alt="number-2" />
        <div>
          <p className="font-semibold">Step 2</p>
          <p>
            It is a long established fact that a reader will be distracted by the readable
            content of a page when looking at its layout.
          </p>
        </div>
      </div>

      {/* Step 3 */}
      <div className="flex items-center">
        <img className="mr-4 w-20 h-20" src="http://www.clker.com/cliparts/T/L/S/Q/5/G/blue-number-one-hi.png" alt="number-3" />
        <div>
          <p className="font-semibold">Step 3</p>
          <p>
            It is a long established fact that a reader will be distracted by the readable
            content of a page when looking at its layout.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HowTo;
