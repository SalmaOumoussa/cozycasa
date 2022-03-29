import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  newReview,
  checkReviewAvailability,
  clearErrors,
} from "../../redux/actions/roomActions";
import { NEW_REVIEW_RESET } from "../../redux/constants/roomConstants";

const DaisyModal = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();
  const router = useRouter();

  const { error, success } = useSelector((state) => state.newReview);
  const { reviewAvailable } = useSelector((state) => state.checkReview);

  const { id } = router.query;

  useEffect(() => {
    if (id !== undefined) {
      dispatch(checkReviewAvailability(id));
    }

    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      toast.success("Review is posted.");
      dispatch({ type: NEW_REVIEW_RESET });

      router.push(`/rooms/${id}`);
    }
  }, [dispatch, success, error, id]);

  const submitHandler = () => {
    const reviewData = {
      rating,
      comment,
      roomId: id,
    };

    dispatch(newReview(reviewData));
  };
  return (
    <div>
      <label
        htmlFor="my-modal-3"
        className="btn modal-button bg-indigo-800 text-white"
      >
        Submit Review
      </label>

      <form action="">
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative bg-indigo-700">
            <label
              htmlFor="my-modal-3"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-lg font-bold text-white">
              Help us & the Community with your feedback!
            </h3>
            <textarea
              className="w-full rounded-xl"
              placeholder="your review..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            ></textarea>
            <button
              onClick={submitHandler}
              className="my-2 w-full glass rounded-xl font-bold text-white"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DaisyModal;
