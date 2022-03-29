import React from "react";
import RoomReview from "../room/RoomReview";

const ListReviews = ({ reviews }) => {
  return (
    <div>
      {reviews &&
        reviews.map((review) => (
          <RoomReview key={review._id} review={review} />
        ))}
    </div>
  );
};

export default ListReviews;
