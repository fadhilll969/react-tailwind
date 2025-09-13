import React from 'react';
import Kairi from "../asset/Kairi.jpg";
const Loading = () => {
  return (
    <div className="bg-[#E5F2F9] min-h-screen flex flex-col items-center p-4 md:p-8 font-sans">
    

      <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg mx-auto mb-10 ml-135">
      <img src={Kairi} alt="Kairi"  />
      </div>

      <div className="text-center w-full px-4">
        <h2 className="text-white text-3xl md:text-5xl font-bold mb-2 drop-shadow-lg">2023/2024</h2>
        <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-extrabold uppercase leading-none tracking-wide mb-8 drop-shadow-lg">
          kairi<br />
        </h1>
      </div>

      <div className="bg-[#FF9900] rounded-lg p-4 w-full max-w-xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
        <div className="text-center md:text-left flex-1">
          <p className="text-white font-semibold text-lg md:text-xl">Regis:</p>
          <div className="flex items-center space-x-2 text-white text-sm md:text-base">
            <span className="font-bold">onik</span>
          </div>
          <div className="flex items-center space-x-2 text-white text-sm md:text-base">
            <span className="font-bold">kairi</span>
          </div>
        </div>
        <div className="flex-shrink-0">
          <button className="bg-white text-[#FF9900] font-extrabold py-3 px-8 rounded-lg shadow-md uppercase text-lg hover:bg-gray-100 transition duration-300">
            Enroll Now!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Loading;