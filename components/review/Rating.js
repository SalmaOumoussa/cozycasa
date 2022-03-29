import React from "react";

const Rating = () => {
  return (
    <>
      <div className="rating">
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2"
          id="1"
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2"
          id="2"
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2"
          id="3"
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2"
          id="4"
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2"
          id="5"
        />
      </div>
    </>
  );
};

export default Rating;
