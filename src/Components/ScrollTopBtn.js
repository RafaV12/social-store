import React from 'react';

function ScrollTopBtn() {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div role="button" onClick={goToTop} className="fixed bottom-5 right-4 w-10 h-10 flex justify-center items-center bg-white rounded-full shadow-md">
      <i className="fa-solid fa-angle-up" />
    </div>
  );
}
export default ScrollTopBtn;
