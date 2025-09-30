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
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/menu/${id}`);
      setData(data.filter(item => item.id !== id));
    } catch (error) {
      console.error("Gagal menghapus data:", error);
    }
  };


  return (
    <>
      <Sidnav />
      <div className="p-6 mt-3 ml-60">
        <h2 className=" text-xl font-bold mb-5 ">Data Menu</h2>

        <table className="border-collapse border border-gray-400 w-full">
          <thead>
            <tr className="bg-gray-200">
                <th className="border border-gray-400 px-4 py-2">no</th>
              <th className="border border-gray-400 px-4 py-2">makanan</th>
              <th className="border border-gray-400 px-4 py-2">paket</th>
              <th className="border border-gray-400 px-4 py-2">Harga</th>
              <th className="border border-gray-400 px-4 py-2">mbud</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="text-center">
                 <td className="border border-gray-400 px-4 py-2">{index + 1}</td>
                <td className="border border-gray-400 px-4 py-2">{item.makanan}</td>
                <td className="border border-gray-400 px-4 py-2">{item.paket}</td>
                <td className="border border-gray-400 px-4 py-2">{item.harga}</td>
                <td className="border border-gray-400 px-4 py-2">
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    onClick={() => handleDelete(item.id)}
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-end mt-10 ">
          <Link
            to="/dashboard"
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