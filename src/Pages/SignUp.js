import { useState } from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
  const [values, setValues] = useState({
    username: '',
    password: '',
    repeatPassword: '',
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen flex flex-col items-center">
      <div style={{ maxWidth: '1300px' }} className="p-8 w-full flex flex-col">
        <p className="mt-8 text-3xl font-bold mb-10">Sign up</p>

        <form onSubmit={onSubmit} className="pb-2 h-full flex flex-col">
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
              className="pl-4 h-10 w-full rounded-lg"
              required
            />
            <p className="mt-2 mb-3 text-sm">
              At least 4 characters, letters and numbers only
            </p>

            <label htmlFor="password">
              <b>Password</b>
            </label>
            <input
              type="password"
              className="pl-4 h-10 w-full rounded-lg"
              placeholder="Enter Password"
              name="password"
              value={values.password}
              onChange={handleChange}
              required
            />
            <p className="mt-2 mb-3 text-sm">At least 6 characters</p>

            <label htmlFor="repeat-password">
              <b>Repeat Password</b>
            </label>
            <input
              type="password"
              className="pl-4 h-10 w-full rounded-lg"
              placeholder="Repeat Password"
              name="repeatPassword"
              value={values.repeatPassword}
              onChange={handleChange}
              required
            />
            {values.password !== values.repeatPassword && (
              <p className="text-red-500 font-md">Passwords do not match!</p>
            )}

            <button
              type="submit"
              disabled={
                values.password !== values.repeatPassword ? 'disabled' : false
              }
              className="mt-8 mb-3 h-10 w-full text-white rounded-full bg-purple-500"
            >
              Sign up
            </button>
          </div>
          <div className="flex justify-center">
            <p className="mr-2">Already have an account?</p>
            <Link to="/login">
              <span className="font-bold underline">Login</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
