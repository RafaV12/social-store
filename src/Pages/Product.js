import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RelatedAccounts from '../Components/Product/RelatedAccounts';
import HowTo from '../Components/Product/HowTo';
import Loading from '../Components/Loading';
import Footer from '../Components/Footer';

function Product() {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setErorr] = useState(false);
  const [account, setAccount] = useState({});

  useEffect(() => {
    const getAccount = () => {
      fetch(`https://dummyjson.com/products/${params.id}`)
        .then((res) => res.json())
        .then((json) => {
          setLoading(false);
          setAccount(json);
        }).catch(() => {
          setLoading(false);
          setErorr(true);
        });
    };
    getAccount();
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
      <div className="pb-14 px-4 pt-12 min-h-screen flex flex-col">
        {/* Account Image */}
        <img
          className="w-3/5 self-center"
          src="https://cdn.skedsocial.com/app/uploads/2021/12/03183434/image6.jpg"
          alt=""
        />
        {/* Account Info */}
        <div className="mt-4 px-1 py-3">
          <p className="text-xl font-semibold">{account.title}</p>
          <p className="mt-2 text-lg">{`$${account.price}`}</p>
          <p className="mt-2 text-gray-700">{account.description}</p>
        </div>
        {/* CTA Buttons */}
        <div className="mt-9 flex flex-col w-full items-center">
          <button className="p-2 mb-3 w-11/12 text-white bg-purple-500 rounded-full" type="button">Buy Now!</button>
          <button className="p-2 w-11/12 text-white bg-purple-500 rounded-full" type="button">Make an Offer</button>
        </div>
        <HowTo />
        <RelatedAccounts />
      </div>
      <Footer />
    </>
  );
}

export default Product;
