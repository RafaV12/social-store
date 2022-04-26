import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../Loading';

function RelatedAccounts() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [relatedAccs, setRelatedAccs] = useState([]);

  useEffect(() => {
    const getAccounts = () => {
      fetch('https://dummyjson.com/products')
        .then((res) => res.json())
        .then((json) => {
          setLoading(false);
          setRelatedAccs(json.products);
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
    <>
      <p className="mt-16 text-2xl">Related Accounts</p>
      <div className="mt-4 flex flex-wrap justify-center">
        {relatedAccs.slice(0, 4).map((acc) => (
          <Link to={`/account/${acc.id}`} key={acc.id}>
            <div className="m-2 min-h-80 w-40 border rounded-md">
              <img
                className="rounded-t-md"
                src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
              />
              <div className="px-1 py-3 text-center">
                <p>{acc.title}</p>
                <p>{acc.category}</p>
                <p>{`$${acc.price}`}</p>
                <p>subs/followers</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

    </>
  );
}

export default RelatedAccounts;
