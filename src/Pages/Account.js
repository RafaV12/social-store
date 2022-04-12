import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../Components/Loading';

function Account() {
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
    <div className="px-4 pt-12 min-h-screen flex flex-col">
      <img
        className="w-2/4 self-center"
        src="https://cdn.skedsocial.com/app/uploads/2021/12/03183434/image6.jpg"
        alt=""
      />
      <div className="mt-4 px-1 py-3">
        <p className="text-xl font-semibold">{account.title}</p>
        <p className="mt-2 text-lg">{`$${account.price}`}</p>
        <p className="mt-2 text-gray-700">{account.description}</p>
      </div>
    </div>
  );
}

export default Account;
