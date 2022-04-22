import React from 'react';

function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <div
        style={{
          borderBottomRightRadius: '100px',
          background: '#f0f1ff',
        }}
        className="h-80 flex justify-center items-center bg-purple-500"
      >
        <div className="w-72 text-center">
          <p className="uppercase font-bold text-4xl">Contact us</p>
          <p className="mt-1 text-sm">Please, contact us if you have any questions. We will get to you within 24hrs.</p>
        </div>
      </div>

      {/* Page Content */}
      <div className="py-14 px-4 flex flex-col">
        <div className="">
          <p className="text-3xl">
            Got a
            <span className="text-green-400"> Question?</span>
          </p>
          <p className="mt-1 text-sm">Do not hesitate to contact us, if you have any questions!</p>
          <p className="mt-4">
            Hours of Operation:
            <br />
            9 am to 6pm EST
            <br />
            Monday to Friday
          </p>
          <p className="mt-4">
            General enquiries:
            <br />
            support@bayofsales.com
          </p>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="mt-7 p-4 flex flex-col">
          <label htmlFor="name">Name</label>
          <input type="text" className="p-2 mt-2 h-10 rounded-lg outline-none" name="name" id="name" />
          <label htmlFor="email" className="mt-4">Email</label>
          <input type="email" className="p-2 mt-2 h-10 rounded-lg outline-none" name="email" id="email" />
          <label htmlFor="message" className="mt-4">Message</label>
          <textarea type="text" className="p-2 mt-2 h-24 rounded-lg outline-none resize-none" name="review" id="review" />
          <button className="p-2 mt-7 bg-purple-500 rounded-full text-white" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
