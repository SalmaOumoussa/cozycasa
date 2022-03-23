import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  SearchIcon,
  GlobeAltIcon,
  UserCircleIcon,
  MenuIcon,
  UsersIcon,
} from "@heroicons/react/solid";

import { useState } from "react";
import { useRouter } from "next/router";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";

const Search = ({ placeholder }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const [location, setLocation] = useState("");
  const router = useRouter();
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "Selection",
  };
  const search = () => {
    router.push({
      pathname: "/",
      query: {
        location: location,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests: noOfGuests,
      },
    });
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.Selection.startDate);
    setEndDate(ranges.Selection.endDate);
  };

  const resetInput = () => {
    setLocation("");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (location.trim()) {
      router.push(
        `/?location=${location}&startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}&guestCapacity=${noOfGuests}`
      );
      // search();
      resetInput();
    } else {
      router.push("/");
    }
  };
  return (
    <div className="p-10 px-40 ">
      <form onSubmit={submitHandler}>
        <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="flex-grow pl-5 bg-transparent outline-none text-gray-600 placeholder-gray-400"
            type="text"
            placeholder={placeholder || "Start your search"}
          />
          <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
        </div>
      </form>
      {location && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5861"]}
            onChange={handleSelect}
          />

          <div className="flex items-center border-b nb-4">
            <h2 className="text-2xl flex-grow font-senibold">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(e.target.value)}
              min={1}
              type="number"
              className="w-12 pl-2 text-lg outline-none text-red-400"
            />
          </div>
          <div className="flex mt-5">
            <button onClick={resetInput} className="flex-grow text-gray-500">
              Cancel
            </button>
            <button
              type="submit"
              onClick={submitHandler}
              className="flex-grow text-red-400"
            >
              Search
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
