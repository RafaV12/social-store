import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../Loading';

function SocialAccounts() {
  const [loading, setLoading] = useState(true);
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const getAccounts = () => {
      fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((json) => {
          setLoading(false);
          setAccounts(json);
        });
    };
    getAccounts();
  }, []);

  if (loading) {
    return (
      <Loading />
    );
  }

  return (
    <div className="mt-7 flex flex-col">
      <p className="pl-4 font-semibold text-lg">All ( Social ) Accounts</p>

      {/* Accounts for sale container */}
      <div className="self-center mt-5 flex flex-wrap justify-center">
        {accounts.map((acc) => (
          <Link to={`/account/${acc.id}`} key={acc.id}>
            <div className="m-2 min-h-80 w-44 border rounded-md">
              <img
                className="rounded-t-md"
                src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
              />
              <div className="px-1 py-3 text-center">
                <p>{acc.title}</p>
                <p>{acc.category}</p>
                <p>{acc.price}</p>
                <p>subs/followers</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <button
        type="button"
        className="py-2.5 px-5 mt-7 mr-2 mb-2 w-11/12 self-center text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      >
        Load more
      </button>
    </div>
  );
}

export default SocialAccounts;
