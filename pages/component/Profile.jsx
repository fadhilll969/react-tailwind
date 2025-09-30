import { useNavigate } from "react-router-dom";

import Sidnav from "./Sidnav";


function Profil() {
  const navigate = useNavigate();

  return (
    <>
      <Sidnav />
      <div className="p-50 mx-80 h-10">
      
        <div className="text-cyan-800 bg-white shadow-lg p-3 mt-0 ">
          <img
            className="w-50 h-50 rounded-full mx-auto border-3 border-sky-300 shadow-md"
            src="https://i.pinimg.com/736x/fa/30/3a/fa303a6471fc51899de0dc19f316db4d.jpg"
            alt="Profil"
          />
            <h1 className="text-center text-3xl text-black font-bold mb-3">test</h1>
        

        <div className="border-blue-500 shadow-lg p-3 border-5 font-semibold">
          <div className=" text-black font-bold ">

            <h2 className="text-2xl">hyy</h2>
            <h2 className="text-2xl">sheyrzz</h2>
            <h2 className="border h-10 text-center text-xl">dyyzn</h2>
          </div>
          <div className="flex justify-center">
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Profil;