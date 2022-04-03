import React from "react";
import { useSelector } from "react-redux";

const RoomReview = ({ review }) => {
<<<<<<< HEAD
  const { user } = useSelector((state) => state.loadedUser);
  console.log(user);
=======
  // const { user } = useSelector((state) => state.loadedUser);
  // async function setName(id) {
  //   const user = await User.findById(id);
  //   return user;
  // }
>>>>>>> 706c87bfd2ef79f3892b572a5860c2aa7c7eb8d5
  return (
    <div className="flex items-start  mt-12">
      <div className="flex-shrink-0">
        <div className="inline-block relative">
          <div className="relative w-16 h-16 rounded-full overflow-hidden">
            <img
              className="absolute top-0 left-0 w-full h-full bg-cover object-fit object-cover"
              src="/images/ava.png"
              alt="Profile picture"
            />
            <div className="absolute top-0 left-0 w-full h-full rounded-full shadow-inner"></div>
          </div>
        </div>
      </div>
      <div className="ml-6">
        <p className="flex items-baseline">
<<<<<<< HEAD
          <span className="text-gray-600 font-bold">"Undefined"</span>
=======
          {/* <span className="text-gray-600 font-bold">
            {setName(review.user)._id == review.user
              ? setName(review.user).firstName +
                " " +
                setName(review.user).lastName
              : "Undefined"}
          </span> */}
>>>>>>> 706c87bfd2ef79f3892b572a5860c2aa7c7eb8d5
        </p>
        <div className="flex items-center mt-4 text-gray-600"></div>
        <div className="mt-3">
          <span className="font-bold">Rated {review.rating} stars</span>
          <p className="mt-1">{review.comment}</p>
        </div>
      </div>
    </div>
  );
};

export default RoomReview;
