import React from 'react'
import Binusa from "../asset/Binusa.jpg"

function LandingPage() {
    return (
        <>



            <div className="flex-1 flex flex-col items-center justify-center p-4">
                <div className="text-center font-bold text-black text-3xl md:text-5xl uppercase mb-10 leading-tight tracking-wider">
                    <h1 className="drop-shadow-lg">smk binusa</h1>
                </div>
            </div>
        
            <div className="flex justify-center mt-10">
                <div className="bg-[blue] rounded-full p-4 md:p-6 shadow-xl w-full max-w-sm">
                    <div className="text-center text-white font-extrabold text-xl md:text-2xl">
                        Pendaftaran SMK Binusa
                    </div>
                </div>
            </div>
    
    <div className='ml-125'>
         <img src={Binusa} alt="Kairi" className='m-15'/>
    </div>


        </>


    )

}

export default LandingPage;