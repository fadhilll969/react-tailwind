import { useState } from "react"

function Sidnav() {
    const [open, setOpen] = useState(false);
    return (


        <div className="">
             
         
            <div className={`fixed top-0 h-full w-60 bg-gray-800 text-white
            ${open ? "translate-0" : "-translate-x-full"}
            transition-transform duration-300 ease-in-out md:translate-x-0`}>
                <div className="text-4xl font-bold mb-8 text-center">test</div>
                <nav className="space-y-3">
                    <div className="">
                        <a href="/dashboard" className="block py-2 px-3 rounded hover:bg-blue-600 border">Dashboard</a>
                        <a href="/tabeldata" className="block py-2 px-3 rounded hover:bg-blue-600 border">tabel</a>
                        <a href="/Profil" className="block py-2 px-3 rounded hover:bg-blue-600 border">Profile</a>
                        
                        <a href="/ntol" className="block py-2 px-3 rounded hover:bg-blue-600 border">ntol</a>
                        
                    </div>
                    <a href="/mbud" className="mt-90 block py-2 px-3 rounded hover:bg-blue-600 border">gg</a>
                </nav>
            </div>
        </div>
            
    )
}


export default Sidnav