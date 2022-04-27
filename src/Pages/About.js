import React from 'react';
import Footer from '../Components/Footer';

function About() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        {/* Page Header */}
        <div
          style={{
            borderBottomRightRadius: '100px',
            background: '#f0f1ff',
          }}
          className="h-80 flex justify-center items-center"
        >
          <div className="w-72 text-center">
            <p className="uppercase font-bold text-4xl">FAQ</p>
            <p className="mt-1 text-sm">Frequent Asked Questions for those with doubts!</p>
          </div>
        </div>

        {/* Page Content */}
        <div className="px-4 pt-10 container flex flex-col">
          <div className="py-2 px-4 mb-4 h-10 w-11/12 flex items-center justify-between shadow-md rounded-lg">
            <p>First question</p>
            <i className="fa-solid fa-plus" />
          </div>
          <div className="py-2 px-4 mb-4 h-10 w-11/12 flex items-center justify-between shadow-md rounded-lg">
            <p>Second question</p>
            <i className="fa-solid fa-plus" />
          </div>
          <div className="py-2 px-4 mb-4 h-10 w-11/12 flex items-center justify-between shadow-md rounded-lg">
            <p>Third question</p>
            <i className="fa-solid fa-plus" />
          </div>
          <div className="py-2 px-4 mb-4 h-10 w-11/12 flex items-center justify-between shadow-md rounded-lg">
            <p>Fourth question</p>
            <i className="fa-solid fa-plus" />
          </div>
          <div className="py-2 px-4 h-10 w-11/12 flex items-center justify-between shadow-md rounded-lg">
            <p>Fifth question</p>
            <i className="fa-solid fa-plus" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
