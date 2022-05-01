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
            <p className="mt-1 text-sm text-gray-600">Frequent Asked Questions for those with doubts!</p>
          </div>
        </div>

        {/* Page Content */}
        <div className="px-4 py-10 container min-h-screen flex flex-col">
          {/* First Question */}
          <div className="mb-6 flex flex-col">
            <p className="font-semibold">Are transactions on BayOfSales safe?</p>
            <p className="mt-1 text-gray-500">
              - Yes, the transaction is on if you go through the escrow service.
              Click here to learn more about Escrow Service
            </p>
          </div>

          {/* Second Question */}
          <div className="mb-6 flex flex-col">
            <p className="font-semibold">How can I buy a Social Media account?</p>
            <p className="mt-1 text-gray-500">
              - To buy a channel, just contact the seller,
              and ask him to buy one of his channel / account.
              You can also negotiate the price with him.
              Then, after talking to the seller, click the "Buy with Escrow Agent"
              button at the top of the chat.
              A group with the escrow agent and the seller (and yourself) will be created.
              The seller must give the following information to the escrow agent:
              Channel / account name, link, price.
              Then let the escrow agent guide you!
            </p>
          </div>

          {/* Third Question */}
          <div className="mb-6 flex flex-col">
            <p className="font-semibold">How to contact BayOfSales?</p>
            <p className="mt-1 text-gray-500">
              - To contact us, please send us an email: contact@bayofsales.com
            </p>
          </div>

          {/* Fourth Question */}
          <div className="mb-6 flex flex-col">
            <p className="font-semibold">What are the hours for the escrow service?</p>
            <p className="mt-1 text-gray-500">
              - We are available from 9 a.m. to 6 p.m.
            </p>
          </div>

          {/* Fifth Question */}
          <div className="mb-6 flex flex-col">
            <p className="font-semibold">How to sell?</p>
            <p className="mt-1 text-gray-500">
              - To sell a Social Media account of yours,
              you'll need to register an account on our site and publish the Social Media
              account you'd like to sell.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
