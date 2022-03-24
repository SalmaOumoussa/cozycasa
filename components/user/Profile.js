import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import { toast } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";

import { useDispatch, useSelector } from "react-redux";
import { updateProfile, clearErrors } from "../../redux/actions/userActions";
import { UPDATE_PROFILE_RESET } from "../../redux/constants/userConstants";

const Profile = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState("/images/ava.png");

  const { user: loadedUser, loading } = useSelector((state) => state.auth);
  const {
    error,
    isUpdated,
    loading: updateLoading,
  } = useSelector((state) => state.user);

  useEffect(() => {
    if (loadedUser) {
      setName(loadedUser.name);
      setEmail(loadedUser.email);
      setAvatarPreview(loadedUser.avatar.url);
    }
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    if (isUpdated) {
      router.push("/");
      dispatch({ type: UPDATE_PROFILE_RESET });
    }
  }, [dispatch, isUpdated, error, loadedUser]);

  const submitHandler = (e) => {
    e.preventDefault();

    const userData = {
      name,
      email,
      password,
      avatar,
    };

    dispatch(updateProfile(userData));
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
    <>
      <div className="flex flex-col items-center justify-center bg-gray-300 h-screen select-none">
        <div class="flex flex-col bg-white px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-xl shadow-2xl w-full max-w-md border-l-4 border-purple-600">
          <div class="mt-10">
            <form onSubmit={submitHandler}>
              <div class="relative w-full mb-3">
                <input
                  type="text"
                  className="border-0 p-4 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div class="relative w-full mb-3">
                <input
                  type="email"
                  className="border-0 p-4 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                  placeholder="your@email.here"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div class="relative w-full mb-3">
                <input
                  type="password"
                  className="border-0 p-4 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                  placeholder="●●●●●●●●●●"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <label htmlFor="avatar_upload">Avatar</label>
              <div className="d-flex align-items-center">
                <div>
                  <figure className="avatar mr-3 item-rtl">
                    <Image
                      width="100px"
                      height="100px"
                      src={avatarPreview}
                      className="rounded-full m-2"
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
                  <label className="text-sm" htmlFor="customFile">
                    Choose Avatar
                  </label>
                </div>
              </div>
              <div class="text-center mt-6">
                <button
                  type="submit"
                  className="p-3 rounded-lg bg-purple-600 outline-none text-white shadow w-32 justify-center focus:bg-purple-700 hover:bg-purple-500"
                  disabled={updateLoading ? true : false}
                >
                  {updateLoading ? <SyncOutlined spin /> : "Update"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
