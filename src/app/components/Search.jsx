"use client";

import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineSearch } from "react-icons/ai";

export default function Search({ setRequest }) {
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  const handleClick = () => {
    setRequest(message);
  };
  return (
    <div className="search-bar">
      <FaLocationDot className="locationIcon" />
      <input
        id="search"
        type="text"
        placeholder="Enter location"
        onChange={handleChange}
      ></input>
      <AiOutlineSearch
        className="search-button"
        type="button"
        onClick={handleClick}
      />
    </div>
  );
}
