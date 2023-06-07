import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="md:px-12 p-4 bg-black h-screen">
      <img
        src="https://img.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg"
        alt=""
        className="mx-auto w-[350px] h-[350px]  mt-8"
      />
      <div className="text-center">
        <Link
          to="/"
          className="bg-red-500 text-white text-xl font-medium mx-auto px-2 py-3 rounded-lg"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
