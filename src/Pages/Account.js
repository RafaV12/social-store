import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../Components/Loading';

function Account() {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [account, setAccount] = useState({});

  useEffect(() => {
    const getAccount = () => {
      fetch(`https://fakestoreapi.com/products/${params.id}`)
        .then((res) => res.json())
        .then((json) => {
          setLoading(false);
          setAccount(json);
        });
    };
    getAccount();
  }, []);

  if (loading) {
    return (
      <Loading />
    );
  }

  return (
    <div className="m-2 min-h-80 w-44 border rounded-md">
      <img
        className="rounded-t-md"
        src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt=""
      />
      <div className="px-1 py-3 text-center">
        <p>{account.title}</p>
        <p>{account.category}</p>
        <p>{account.price}</p>
        <p>subs/followers</p>
      </div>
    </div>
  );
}

export default Account;
