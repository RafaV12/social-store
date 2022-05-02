import React, { useEffect, useState } from 'react';
import Loading from '../Components/Loading';

function UserProfile() {
  const [userValues, setUserValues] = useState({
    avatar: '',
    username: '',
    userDesc: '',
    itemsSold: '',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const abortCont = new AbortController();

    const getUserInfo = () => {
      fetch('https://62672e3278638336421c2cb1.mockapi.io/api/v1/users/1', { signal: abortCont.signal })
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          setUserValues({
            avatar: data.avatar,
            username: data.username,
            userDesc: data.user_desc,
            itemsSold: data.items_sold,
          });
        }).catch((err) => {
          if (err.name === 'AbortError') {
            console.log('Fetch Aborted');
          } else {
            setLoading(false);
            setError(true);
          }
        });
    };
    getUserInfo();

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
    <div className="px-4 py-16 min-h-screen">

      {/* User Info */}
      <div>
        <img src={userValues.avatar} alt="" className="h-28 w-28 rounded-lg" />
        <div className="mt-5 flex items-center">
          <h1 className="text-4xl font-bold text-gray-800">{userValues.username}</h1>
          {/* User Badges */}
          <div className="ml-4">
            <img className="h-8 w-8" src="https://i.ibb.co/wcYqHY2/best-seller-badge-best-seller-icon-best-seller-vector-best-seller-png-219864-removebg-preview.png" alt="best-seller" />
          </div>
        </div>
        <p className="mt-1 text-gray-600">{userValues.userDesc}</p>
        {/* CTA Section */}
        <div className="mt-5 w-full flex justify-between items-center">
          <div className="py-3 w-3/5 flex justify-center items-center text-white bg-purple-400 rounded-lg">
            <p>Items sold</p>
            <p className="mx-4">|</p>
            <p>{userValues.itemsSold}</p>
          </div>
          <button type="button" className="py-3 px-6 text-white bg-purple-500 rounded-lg">Contact</button>
        </div>
      </div>

      <div className="mt-4">
        <p className="font-semibold text-lg">Accounts for sale</p>

        {/* Accounts for Sale Container */}
        <div className="mt-5">
          <div
            className="p-4 mb-4 w-full h-48 rounded-lg"
            style={{
              backgroundImage: 'url("https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")',
            }}
          >
            <div>
              <p className="text-white text-2xl">Account name</p>
              <p className="text-gray-200 text-lg">category</p>
              <p className="text-gray-200 text-lg">subs/followers</p>
              <p className="mt-9 text-white text-xl">Price</p>
            </div>
          </div>

          <div
            className="p-4 mb-4 w-full h-48 rounded-lg"
            style={{
              backgroundImage: 'url("https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")',
            }}
          >
            <div>
              <p className="text-white text-2xl">Account name</p>
              <p className="text-gray-200 text-lg">category</p>
              <p className="text-gray-200 text-lg">subs/followers</p>
              <p className="mt-9 text-white text-xl">Price</p>
            </div>
          </div>

          <div
            className="p-4 mb-4 w-full h-48 rounded-lg"
            style={{
              backgroundImage: 'url("https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")',
            }}
          >
            <div>
              <p className="text-white text-2xl">Account name</p>
              <p className="text-gray-200 text-lg">category</p>
              <p className="text-gray-200 text-lg">subs/followers</p>
              <p className="mt-9 text-white text-xl">Price</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
