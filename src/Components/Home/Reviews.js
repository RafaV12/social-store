import React from 'react';

function Reviews() {
  return (
    <div className="px-4 pb-14 pt-7 flex flex-col">
      <div>
        <h2 className="text-3xl mb-6">Customer Reviews</h2>
        <p className="mb-6">
          We are proud of our outstanding service when it comes to selling Instagram accounts.
          Only don't take our word, see our clients experience with us.
        </p>
        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col border-2 p-4">
          <p className="mb-7">Submit your Review</p>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
          <label htmlFor="review">Review</label>
          <input type="text" name="review" id="review" />
          <button className="p-2 bg-blue-400" type="submit">Submit</button>
        </form>
      </div>
      <div className="p-4 mt-6 h-80 overflow-y-scroll">
        <p className="mb-4">
          Long process! but I was able to sell my account. So Im happy!”
          <br />
          -Anon
        </p>
        <p className="mb-4">
          Long process! but I was able to sell my account. So Im happy!”
          <br />
          -Anon
        </p>
        <p className="mb-4">
          Long process! but I was able to sell my account. So Im happy!”
          <br />
          -Anon
        </p>
        <p className="mb-4">
          Long process! but I was able to sell my account. So Im happy!”
          <br />
          -Anon
        </p>
        <p className="mb-4">
          Long process! but I was able to sell my account. So Im happy!”
          <br />
          -Anon
        </p>
        <p className="mb-4">
          Long process! but I was able to sell my account. So Im happy!”
          <br />
          -Anon
        </p>
        <p className="mb-4">
          Long process! but I was able to sell my account. So Im happy!”
          <br />
          -Anon
        </p>
      </div>
    </div>
  );
}

export default Reviews;
