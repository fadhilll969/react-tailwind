import React from 'react';
import Kairi from "../asset/Binusa.jpg";
import { Link } from 'react-router-dom';

const Loading = () => {
  return (
    <div className="bg-[#E5F2F9] min-h-screen flex flex-col items-center p-4 md:p-8 font-sans">


      <div className="mx-auto mb-10 ml-135">
        <img src={Kairi} alt="Kairi" />
      </div>

      <div className="text-center w-full px-4">
        <h2 className="text-white text-3xl md:text-5xl font-bold mb-2 drop-shadow-lg">PENDAFTARAN</h2>
        <h1 className="text-white text-5xl md:text-7xl lg:text-5xl font-bold uppercase leading-none tracking-wide mb-8 drop-shadow-lg">
          smk bina nusantara<br/>
        </h1>
      </div>

      <div className="bg-[#FF9900] rounded-lg p-3 w-full max-w-xl">
        <div className="flex justify-center text-center md:text-left flex-2">

          <Link to="/V">

            <button className="bg-white text-[#FF9900] font-extrabold py-3 px-10 rounded-lg shadow-md uppercase text-lg hover:bg-gray-100 transition duration-300">
              daftar sekarang
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Loading;