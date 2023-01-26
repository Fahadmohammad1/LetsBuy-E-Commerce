/* eslint-disable no-unused-vars */
import React from "react";
import { useState, CSSProperties } from "react";
import HashLoader from "react-spinners/HashLoader";

const Loading = () => {
  const color = "#FF4E16";
  const loading = true;
  return (
    <div className="w-full flex justify-center items-center">
      <HashLoader color={color} loading={loading} size={80} />
    </div>
  );
};

export default Loading;
