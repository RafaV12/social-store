import React from 'react';

function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <div className="h-80 flex justify-center items-center bg-gray-700">
        <div className="w-72 text-center text-white">
          <p className="uppercase font-bold text-4xl">Contact us</p>
          <p className="mt-1 text-sm">Please, contact us if you have any questions. We will get to you within 24hrs.</p>
        </div>
      </div>

      {/* Page Content */}
      <div className="py-14 px-4 border-2 flex flex-col">
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

        <form onSubmit={(e) => e.preventDefault()} className="mt-7 flex flex-col border-2 p-4">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
          <label className="mt-4" htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
          <label className="mt-4" htmlFor="message">Message</label>
          <textarea className="resize-none" type="text" name="message" id="message" />
          <button className="mt-7 p-2 bg-blue-400" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
