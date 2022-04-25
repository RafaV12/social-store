import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../Loading';

function SocialAccounts() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [accounts, setAccounts] = useState([]);
  const [accsPerPage, setAccsPerPage] = useState(6);

  const showMore = () => {
    if (accsPerPage < accounts.length) {
      setAccsPerPage(accsPerPage + 4);
    }
  };

  useEffect(() => {
    const getAccounts = () => {
      fetch('https://dummyjson.com/products')
        .then((res) => res.json())
        .then((json) => {
          setLoading(false);
          setAccounts(json.products);
        }).catch(() => {
          setLoading(false);
          setError(true);
        });
    };
    getAccounts();
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
    <div className="py-7 flex flex-col">
      <p className="pl-4 font-semibold text-lg md:pl-7">All ( Social ) Accounts</p>

      {/* Accounts for sale container */}
      <div className="w-full container mt-5 flex justify-center flex-wrap md:self-center">
        {accounts.slice(0, accsPerPage).map((acc) => (
          <Link to={`/account/${acc.id}`} key={acc.id}>
            <div
              className="m-1 p-3 h-80 w-48 overflow-y-hidden bg-white rounded-lg shadow"
            >
              <img
                src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
                className="h-40 w-full"
              />
              <div className="mt-2 px-1 text-center">
                <p>{acc.title}</p>
                <p>{acc.category}</p>
                <p>{`$${acc.price}`}</p>
                <p>subs/followers</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <button
        type="button"
        className="py-2.5 px-5 mt-7 mr-2 mb-2 w-11/12 self-center text-sm font-medium text-white focus:outline-none bg-gradient-to-r from-purple-500 to-blue-500 rounded-full md:w-2/4 md:text-base"
        onClick={showMore}
      >
        {accsPerPage < accounts.length ? 'Show More' : 'Currently showing All'}
      </button>
    </div>
  );
}

export default SocialAccounts;
