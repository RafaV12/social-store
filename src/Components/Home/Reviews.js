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
        {/* Review submit Form */}
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

      {/* Reviews from Customers */}
      <div className="p-4 mt-6 h-80 overflow-y-scroll">
        <div className="mb-6 flex items-center">
          <img className="mr-4 w-12 h-12 rounded-full" src="https://static01.nyt.com/newsgraphics/2020/11/12/fake-people/4b806cf591a8a76adfc88d19e90c8c634345bf3d/fallbacks/mobile-02.jpg" alt="" />
          <p>
            The escrow service is safe, I prefer to deal with that than directly with the buyer.
            Thank you escrow agent!
            <br />
            -Tradadd
          </p>
        </div>
        <div className="mb-6 flex items-center">
          <img className="mr-4 w-12 h-12 rounded-full" src="https://www.thispersondoesnotexist.com/image" alt="" />
          <p>
            Thanks, good service!
            <br />
            -Alex45
          </p>
        </div>
        <div className="mb-6 flex items-center">
          <img className="mr-4 w-12 h-12 rounded-full" src="https://static.boredpanda.com/blog/wp-content/uploads/2018/12/ai-image-generation-fake-faces-people-nvidia-5c18acb9cd17f__700.jpg" alt="" />
          <p>
            Nice, I like!!
            <br />
            -Rayyan
          </p>
        </div>
        <div className="mb-6 flex items-center">
          <img className="mr-4 w-12 h-12 rounded-full" src="https://static.generated.photos/vue-static/face-generator/landing/wall/10.jpg" alt="" />
          <p>
            i like this service it's good fast etc.
            <br />
            -Tayshan
          </p>
        </div>
        <div className="mb-6 flex items-center">
          <img className="mr-4 w-12 h-12 rounded-full" src="https://miro.medium.com/max/1400/1*ocgwEdtRZw9jzBol1iq3OQ.jpeg" alt="" />
          <p>
            great service, thanks
            <br />
            -Lolia
          </p>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
