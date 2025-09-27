import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Sidnav from "./component/Sidnav";

function Tabeldata() {
  const [data, setData] = useState([]);

  useEffect(() => {



    const fetchData = async () => {

      try {
        const res = await axios.get("http://localhost:5000/menu");
        setData(res.data);
      } catch (err) {
        console.error("Gagal ambil data:", err);
      }
    };
    fetchData();
  }, []);


  return (
    <>
      <Sidnav />
      <div className="p-6 mt-16">
        <h2 className="flex justify-center text-xl font-bold mb-4">Data Menu</h2>

        <table className="border-collapse border border-gray-400 w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-400 px-4 py-2">makanan</th>
              <th className="border border-gray-400 px-4 py-2">paket</th>
              <th className="border border-gray-400 px-4 py-2">Harga</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="text-center">
                <td className="border border-gray-400 px-4 py-2">{item.makanan}</td>
                <td className="border border-gray-400 px-4 py-2">{item.paket}</td>
                <td className="border border-gray-400 px-4 py-2">{item.harga}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-end mt-10 ">
          <Link
            to="/sidnav"
            className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Kembali
          </Link>
        </div>
      </div>
    </>
  );
}

export default Tabeldata;