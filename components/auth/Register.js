// import React, { useState, useContext, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { registerUser, clearErrors } from "../../redux/actions/userActions";

// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { SyncOutlined } from "@ant-design/icons";
// import Link from "next/link";
// import { useRouter } from "next/router";
// import Image from "next/image";

// const Register = () => {
//   const dispatch = useDispatch();
//   const router = useRouter();
//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const { name, email, password } = user;
//   const [avatar, setAvatar] = useState("");
//   const [avatarPreview, setAvatarPreview] = useState("/images/ava.png");
//   const { success, error, loading } = useSelector((state) => state.auth);

//   useEffect(() => {
//     if (success) {
//       router.push("/login");
//       toast.success("Registered Successfully!");
//     }
//     if (error) {
//       toast.error(error);
//       dispatch(clearErrors());
//     }
//   }, [dispatch, success, error]);

//   const submitHandler = (e) => {
//     e.preventDefault();
//     const userData = {
//       name,
//       email,
//       password,
//       avatar,
//     };
//     dispatch(registerUser(userData));
//   };

//   const onChange = (e) => {
//     if (e.target.name === "avatar") {
//       const reader = new FileReader();
//       reader.onload = () => {
//         if (reader.readyState === 2) {
//           setAvatar(reader.result);
//           setAvatarPreview(reader.result);
//         }
//       };

//       reader.readAsDataURL(e.target.files[0]);
//     } else {
//       setUser({ ...user, [e.target.name]: e.target.value });
//     }
//   };
//   return (
//     <>
//       <div className="flex flex-col items-center justify-center m-2 bg-gray-300 h-screen select-none">
//         <div class="flex flex-col bg-white px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-xl shadow-2xl w-full max-w-md border-l-4 border-purple-600">
//           <div class="mt-10">
//             <form action="" onSubmit={submitHandler}>
//               <div class="relative w-full mb-3">
//                 <input
//                   type="text"
//                   className="border-0 p-4 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
//                   onChange={onChange}
//                   value={name}
//                   placeholder="Your name"
//                   required
//                 />
//               </div>
//               <div class="relative w-full mb-3">
//                 <input
//                   type="email"
//                   className="  border-0 p-4 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
//                   onChange={onChange}
//                   value={email}
//                   placeholder="your@email.here"
//                   required
//                 />
//               </div>
//               <div class="relative w-full mb-3">
//                 <input
//                   type="password"
//                   className="  border-0 p-4 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
//                   onChange={onChange}
//                   value={password}
//                   placeholder="●●●●●●●●●●"
//                   required
//                 />
//               </div>
//               <label htmlFor="avatar_upload">Avatar</label>
//               <div className="d-flex align-items-center">
//                 <div>
//                   <figure className="avatar mr-3 item-rtl">
//                     <img
//                       width="80px"
//                       height="80px"
//                       src={avatarPreview}
//                       className="rounded-none m-2"
//                       alt="image"
//                     />
//                   </figure>
//                 </div>
//                 <div className="custom-file">
//                   <input
//                     type="file"
//                     name="avatar"
//                     className="custom-file-input"
//                     id="customFile"
//                     accept="images/*"
//                     onChange={onChange}
//                   />
//                   <label className="text-sm" htmlFor="customFile">
//                     Choose Avatar
//                   </label>
//                 </div>
//               </div>
//               <div class="text-center mt-6">
//                 <button
//                   type="submit"
//                   className="p-3 rounded-lg bg-purple-600 outline-none text-white shadow w-32 justify-center focus:bg-purple-700 hover:bg-purple-500"
//                   disabled={loading ? true : false}
//                 >
//                   {loading ? <SyncOutlined spin /> : "REGISTER"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Register;
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { toast } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";

import { useDispatch, useSelector } from "react-redux";
import { registerUser, clearErrors } from "../../redux/actions/userActions";

const Register = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = user;

  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState("/images/ava.png");

  const { success, error, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    if (success) {
      router.push("/login");
    }

    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, success, error]);

  const submitHandler = (e) => {
    e.preventDefault();

    const userData = {
      name,
      email,
      password,
      avatar,
    };

    dispatch(registerUser(userData));
  };

  const onChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatar(reader.result);
          setAvatarPreview(reader.result);
        }
      };
      if (e.target.files[0]) {
        reader.readAsDataURL(e.target.files[0]);
      }
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  return (
    <div className="container container-fluid">
      <div className="row wrapper">
        <div className="col-10 col-lg-5">
          <form className="shadow-lg" onSubmit={submitHandler}>
            <h1 className="mb-3">Join Us</h1>

            <div className="form-group">
              <label htmlFor="name_field">Full Name</label>
              <input
                type="text"
                id="name_field"
                className="form-control"
                name="name"
                value={name}
                onChange={onChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email_field">Email</label>
              <input
                type="email"
                id="email_field"
                className="form-control"
                name="email"
                value={email}
                onChange={onChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password_field">Password</label>
              <input
                type="password"
                id="password_field"
                className="form-control"
                name="password"
                value={password}
                onChange={onChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="avatar_upload">Avatar</label>
              <div className="d-flex align-items-center">
                <div>
                  <figure className="avatar mr-3 item-rtl">
                    <img
                      width="80px"
                      height="80px"
                      src={avatarPreview}
                      className="rounded-circle"
                      alt="image"
                    />
                  </figure>
                </div>
                <div className="custom-file">
                  <input
                    type="file"
                    name="avatar"
                    className="custom-file-input"
                    id="customFile"
                    accept="images/*"
                    onChange={onChange}
                  />
                  <label className="custom-file-label" htmlFor="customFile">
                    Choose Avatar
                  </label>
                </div>
              </div>
            </div>

            <div className="text-center mt-6">
              <button
                onClick={console.log("button")}
                type="submit"
                className="text-white bg-purple-500 px-5 py-3 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150"
                disabled={loading ? true : false}
              >
                {loading ? <SyncOutlined spin /> : "Register"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
