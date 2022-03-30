import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SyncOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, clearErrors } from "../redux/actions/userActions";

const Add = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [user, setUser] = useState({
    name: "",
    pricePerNight: "",
    description: "",
    address: "",
    guestCapacity: 0,
    numOfBeds: 0,
    internet: false,
    breakfast: false,
    airConditioned: false,
    petsAllowed: false,
    roomCleaning: false,
  });

  const [name, setName] = useState("");
  const [pricePerNight, setPricePerNight] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [guestCapacity, setNoOfGuests] = useState("");
  const [numOfBeds, setNumOfBeds] = useState("");
  const [internet, setInternet] = useState("");
  const [breakfast, setBreakfast] = useState("");
  const [airConditioned, setInternetConditioned] = useState("");
  const [petsAllowed, setPetsAllowed] = useState("");
  const [roomCleaning, setRoomCleaning] = useState("");
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
      firstName,
      lastName,
      username,
      email,
      password,
      address,
      contactNum,
      description,
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
    }
  };
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
      />
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
      />
      <section class="py-1 bg-blueGray-50">
        <div class="w-full lg:w-8/12 px-4 mx-auto mt-6">
          <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <div class="rounded-t bg-white mb-0 px-6 py-6">
              <div class="text-center flex justify-between">
                <h6 class="text-blueGray-700 text-xl font-bold">
                  Add A Listing
                </h6>
              </div>
            </div>
            <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form onSubmit={submitHandler}>
                <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Listing Information
                </h6>
                <div class="flex flex-wrap">
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password"
                      >
                        title
                      </label>{" "}
                      <input
                        type="text"
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password"
                      >
                        Price Per Night
                      </label>{" "}
                      <input
                        type="text"
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={pricePerNight}
                        onChange={(e) => setPricePerNight(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div class="flex flex-wrap">
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password"
                      >
                        guest Capacity
                      </label>{" "}
                      <input
                        type="number"
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        values={guestCapacity}
                        onChange={(e) => setNoOfGuests(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password"
                      >
                        no of Beds
                      </label>
                      <input
                        type="nnumber"
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={numOfBeds}
                        onChange={(e) => setNumOfBeds(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div class="flex flex-wrap">
                  <div class="w-full lg:w-12/12 px-4">
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password"
                      >
                        Address
                      </label>{" "}
                      <input
                        type="text"
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div class="">
                    <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                      Listing Features
                    </h6>
                  </div>
                  <div class="flex my-4">
                    <h1 class="font-semibold text-sm text-black">Breakfast</h1>
                    <div class="flex justify-center mx-12">
                      <div class="form-check form-check-inline justify-center">
                        <input
                          class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-purple-600 checked:border-purple-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio1"
                          value="option1"
                        />
                        <label
                          class="form-check-label inline-block text-gray-800"
                          for="inlineRadio10"
                        >
                          Yes{" "}
                        </label>
                      </div>
                      <div class="form-check form-check-inline mx-44">
                        <input
                          class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-purple-600 checked:border-purple-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio2"
                          value="option2"
                        />
                        <label
                          class="form-check-label inline-block text-gray-800"
                          for="inlineRadio20"
                        >
                          {" "}
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="flex my-4">
                    <h1 class="font-semibold text-sm text-black">Internet</h1>
                    <div class="flex justify-center mx-12">
                      <div class="form-check form-check-inline justify-center">
                        <input
                          class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-purple-600 checked:border-purple-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio1"
                          value="option1"
                        />
                        <label
                          class="form-check-label inline-block text-gray-800"
                          for="inlineRadio10"
                        >
                          Yes{" "}
                        </label>
                      </div>
                      <div class="form-check form-check-inline mx-44">
                        <input
                          class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-purple-600 checked:border-purple-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio2"
                          value="option2"
                        />
                        <label
                          class="form-check-label inline-block text-gray-800"
                          for="inlineRadio20"
                        >
                          {" "}
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="flex my-4">
                    <h1 class="font-semibold text-sm text-black">
                      Air Conditioned
                    </h1>
                    <div class="flex justify-center mx-12">
                      <div class="form-check form-check-inline justify-center">
                        <input
                          class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-purple-600 checked:border-purple-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio1"
                          value="option1"
                        />
                        <label
                          class="form-check-label inline-block text-gray-800"
                          for="inlineRadio10"
                        >
                          Yes{" "}
                        </label>
                      </div>
                      <div class="form-check form-check-inline mx-44">
                        <input
                          class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-purple-600 checked:border-purple-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio2"
                          value="option2"
                        />
                        <label
                          class="form-check-label inline-block text-gray-800"
                          for="inlineRadio20"
                        >
                          {" "}
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="flex my-4">
                    <h1 class="font-semibold text-sm text-black">
                      Pets Allowed
                    </h1>
                    <div class="flex justify-center mx-12">
                      <div class="form-check form-check-inline justify-center">
                        <input
                          class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-purple-600 checked:border-purple-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio1"
                          value="option1"
                        />
                        <label
                          class="form-check-label inline-block text-gray-800"
                          for="inlineRadio10"
                        >
                          Yes{" "}
                        </label>
                      </div>
                      <div class="form-check form-check-inline mx-44">
                        <input
                          class="form-check-input fo^rm-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-purple-600 checked:border-purple-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio2"
                          value="option2"
                        />
                        <label
                          class="form-check-label inline-block text-gray-800"
                          for="inlineRadio20"
                        >
                          {" "}
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="flex my-4">
                    <h1 class="font-semibold text-sm text-black">
                      Room Cleaning
                    </h1>
                    <div class="flex justify-center mx-12">
                      <div class="form-check form-check-inline justify-center">
                        <input
                          class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-purple-600 checked:border-purple-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio1"
                          value="option1"
                        />
                        <label
                          class="form-check-label inline-block text-gray-800"
                          for="inlineRadio10"
                        >
                          Yes{" "}
                        </label>
                      </div>
                      <div class="form-check form-check-inline mx-44">
                        <input
                          class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-purple-600 checked:border-purple-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio2"
                          value="option2"
                        />
                        <label
                          class="form-check-label inline-block text-gray-800"
                          for="inlineRadio20"
                        >
                          {" "}
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex flex-wrap">
                  <div class="w-full lg:w-12/12 px-4">
                    <div class="relative w-full mb-3">
                      <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                        description
                      </h6>
                      <textarea
                        type="text"
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        rows="4"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                </div>

                <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Upload Pictures of your Listing
                </h6>
                <div className="d-flex align-items-center">
                  <div>
                    <figure className="avatar mr-3 item-rtl">
                      <Image
                        width="100px"
                        height="100px"
                        src="/../public/images/logo.png"
                        className="rounded-full m-2"
                        alt="image"
                      />
                    </figure>
                  </div>
                  <input
                    type="file"
                    name="avatar"
                    id="customFile"
                    accept="images/*"
                    onChange={onChange}
                  />
                </div>
                <button
                  type="submit"
                  className="p-3 rounded-lg bg-purple-600 outline-none text-white shadow w-32 m-auto mb-3 justify-center focus:bg-purple-700 hover:bg-purple-500"
                  disabled={loading ? true : false}
                >
                  {loading ? <SyncOutlined spin /> : "REGISTER"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Add;
