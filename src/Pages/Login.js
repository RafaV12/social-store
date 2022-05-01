import { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [values, setValues] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="min-h-screen flex md:justify-center xl:items-center"
    >
      <div
        className="p-8 mt-14 container w-full flex flex-col md:w-3/5"
      >
        <p className="text-3xl font-bold mb-10">Log in</p>

        <form onSubmit={onSubmit} className="pb-2 w-full h-full flex flex-col">
          <div className="flex flex-col">
            <label htmlFor="username">
              <b>Username</b>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              name="username"
              value={values.username}
              onChange={handleChange}
              className="mt-2 pl-4 mb-4 h-10 w-full rounded-lg input-bg-color"
              required
            />

            <label htmlFor="password">
              <b>Password</b>
            </label>
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              className="mt-2 pl-4 h-10 w-full rounded-lg input-bg-color"
              placeholder="Enter Password"
              required
            />

            <button
              type="submit"
              className="mt-8 mb-4 h-10 w-full text-white rounded-full bg-purple-500"
            >
              Log in
            </button>
          </div>
          <div className="flex justify-center">
            <p className="mr-2">Don't have an account?</p>
            <Link to="/signup">
              <span className="font-bold underline">Register</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
