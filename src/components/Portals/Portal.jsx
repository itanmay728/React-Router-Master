import React from "react";

const Portal = () => {
  return (
    <>
      <div className="bg-gray-600/50 absolute inset-0 flex justify-center items-center h-screen w-screen">
      <div className="text-red-500 opacity-100 text-2xl font-bold h-20 w-2xl flex justify-center items-center bg-white">
        <p>This is just a button buddy 😀</p>
      </div>
      </div>
    </>
  );
};

export default Portal;
