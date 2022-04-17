import React from 'react';

function HowTo() {
  return (
    <div className="py-6 border-t-2 border-b-2 mt-32">
      {/* Step 1 */}
      <div className="mb-7 flex items-center">
        <img className="mr-4 w-28 h-28" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Eo_circle_blue_number-1.svg/640px-Eo_circle_blue_number-1.svg.png" alt="number-1" />
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
        <img className="mr-4 w-28 h-28" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Eo_circle_blue_number-2.svg/2048px-Eo_circle_blue_number-2.svg.png" alt="number-1" />
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
        <img className="mr-4 w-28 h-28" src="https://orbtrader.in/wp-content/uploads/2021/04/1024px-Eo_circle_blue_number-3.svg.png" alt="number-1" />
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
