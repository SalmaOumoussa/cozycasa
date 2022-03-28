// import React from "react";
// import Link from "next/link";

// const Listing = ({ room }) => {
//   return (
//     <div>
//       <link
//         rel="stylesheet"
//         href="https://cdn.tailgrids.com/tailgrids-fallback.css"
//       />

//       {/* <!-- ====== Cards Section Start --> */}

//       <div class="w-full md:w-1/2 xl:w-1/3 px-4 mt-2">
//         <div class="bg-white rounded-lg overflow-hidden mb-10">
//           <img
//             src="https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-01.jpg"
//             alt="image"
//             class="w-full"
//           />
//           <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
//             <h3>
//               <a
//                 href="javascript:void(0)"
//                 class="
//                         font-semibold
//                         text-dark text-xl
//                         sm:text-[22px]
//                         md:text-xl
//                         lg:text-[22px]
//                         xl:text-xl
//                         2xl:text-[22px]
//                         mb-4
//                         block
//                         hover:text-primary
//                         "
//               >
//                 {room.name}
//               </a>
//             </h3>
//             <p class="text-base text-body-color leading-relaxed mb-7">
//               {room.description}
//             </p>
//             <Link href={`/rooms/${room._id}`}>
//               <a
//                 class="
//                      inline-block
//                      py-2
//                      px-7
//                      border border-[#E5E7EB]
//                      rounded-full
//                      text-base text-body-color
//                      font-medium
//                      hover:border-primary hover:bg-primary hover:text-white
//                      transition
//                      "
//               >
//                 View Details
//               </a>
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* <!-- Cards Section End --> */}
//     </div>
//   );
// };

// export default Listing;
import React from "react";
import Link from "next/link";

const Listing = ({ room }) => {
  return (
    <>
      <div className="bg-white">
        <link
          rel="stylesheet"
          href="https://cdn.tailgrids.com/tailgrids-fallback.css"
        />

        <div class=" m-4 h-15 w-full max-w-sm rounded overflow-hidden shadow-lg px-4 py-3">
          <div class="bg-white rounded-lg overflow-hidden mb-10">
            <img
              src="https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-01.jpg"
              alt="image"
              class="w-full"
            />
            <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
              <h3>
                <a
                  href="javascript:void(0)"
                  class="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        "
                >
                  {room.name}
                </a>
              </h3>
              <p class="text-base text-body-color leading-relaxed mb-7">
                {room.description}
              </p>
              <Link href={`/rooms/${room._id}`}>
                <a
                  class="
                     inline-block
                     py-2
                     px-7
                     border border-[#c265ca]
                     rounded-full
                     text-base text-body-color
                     font-medium
                     hover:border-purple-400 hover:bg-purple-400 hover:text-white
                     transition
                     "
                >
                  View Details
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Listing;
