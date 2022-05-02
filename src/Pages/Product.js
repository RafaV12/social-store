import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RelatedAccounts from '../Components/Product/RelatedAccounts';
import HowTo from '../Components/Product/HowTo';
import Loading from '../Components/Loading';
import Footer from '../Components/Footer';

function Product() {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [account, setAccount] = useState({});

  useEffect(() => {
    const abortCont = new AbortController();

    const getAccount = () => {
      fetch(`https://dummyjson.com/products/${params.id}`, { signal: abortCont.signal })
        .then((res) => res.json())
        .then((json) => {
          setLoading(false);
          setAccount(json);
        }).catch((err) => {
          if (err.name === 'AbortError') {
            console.log('Fetch Aborted');
          } else {
            setLoading(false);
            setError(true);
          }
        });
    };
    getAccount();

    return () => abortCont.abort();
  }, []);

  if (loading) {
    return (
      <Loading />
    );
  }

  if (error) {
    return (
      <div className="min-h-screen">Something went wrong fetching the data...</div>
    );
  }

  return (
    <>
      <div className="pb-14 px-4 pt-12 min-h-screen flex flex-col md:pt-24 md:px-7 xl:justify-center xl:items-center 2xl:pt-0">
        {/* Account Image */}
        <img
          className="w-3/5 self-center md:w-2/4 lg:w-2/5 xl:w-1/4"
          src="https://cdn.skedsocial.com/app/uploads/2021/12/03183434/image6.jpg"
          alt=""
        />
        {/* Photo slider */}
        <div className="p-2 mt-4 h-20 flex self-center border-2 items-center justify-center rounded-lg">
          <div className="mr-2 h-full w-16 border-2 bg-gray-200" />
          <div className="mr-2 h-full w-16 border-2 bg-gray-200" />
          <div className="mr-2 h-full w-16 border-2 bg-gray-200" />
          <div className="mr-2 h-full w-16 border-2 bg-gray-200" />
          <div className="h-full w-16 border-2 bg-gray-200" />
        </div>
        {/* Account Info */}
        <div className="mt-4 px-1 py-3">
          <p className="text-xl font-semibold">{account.title}</p>
          <p className="mt-2 text-lg">{`$${account.price}`}</p>
          <p className="mt-2 text-gray-700">{account.description}</p>
        </div>
        {/* CTA Buttons */}
        <div className="mt-9 flex flex-col w-full items-center">
          <button className="p-2 mb-3 w-11/12 text-white bg-purple-500 rounded-full md:w-2/4 lg:w-2/5" type="button">Buy Now!</button>
          <button className="p-2 w-11/12 text-white bg-purple-500 rounded-full md:w-2/4 lg:w-2/5" type="button">Make an Offer</button>
        </div>
        <HowTo />
        <RelatedAccounts />
      </div>
      <Footer />
    </>
  );
}

export default Product;
