import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Sidnav from "./Sidnav";

function Dashboard() {
    const [formData, setFormData] = useState({
        makanan: "",
        paket: "",
        harga: 0,
    });

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            // kirim data ke backend
            const response = await axios.post("http://localhost:5001/menu", formData);

            console.log("Respon server:", response.data);
            alert("Data berhasil ditambahkan!");

            // Reset form
            setFormData({
                makanan: "",
                paket: "",
                harga: "",
            });

            // opsional: otomatis kembali ke tabel setelah sukses
            navigate("/tabeldata");
        } catch (error) {
            console.error("Error saat menambahkan data:", error);
            alert("Gagal menambahkan data!");
        } finally {
            setLoading(false);
        }
    };
    const handleKembali = () => {
        navigate("/tabeldata");
    };


    return (
        <>
            <Sidnav />
            <div className="flex justify-center items-center min-h-screen bg-sky-600 bg-indigo-400">
                <form
                    onSubmit={handleSubmit}
                    className="bg-white p-12 rounded-md shadow-md w-96"
                >
                    <div className="">
                        <h2 className="text-center font-bold mb-4 text-lg">Tambah Teks</h2>

                        <label className="block mb-2 font-semibold" htmlFor="makanan">
                            Makanan
                        </label>
                        <input
                            id="makanan"
                            name="makanan"
                            type="text"
                            placeholder="masukan teks"
                            value={formData.makanan}
                            onChange={handleChange}
                            className="border border-gray-300 rounded px-3 py-2 mb-4 w-full"
                            required
                        />

                        <label className="block mb-2 font-semibold" htmlFor="paket">
                            Paket
                        </label>
                        <input
                            id="paket"
                            name="paket"
                            type="text"
                            placeholder="masukan teks"
                            value={formData.paket}
                            onChange={handleChange}
                            className="border border-gray-300 rounded px-3 py-2 mb-4 w-full"
                            required
                        />
                        <label htmlFor="Harga" className="block text-gray-700 text-sm font-bold mb-2">
                            Harga
                        </label>
                        <input
                            id="harga"
                            type="number"
                            name="harga"
                            value={formData.harga}
                            onChange={handleChange}
                            placeholder="Masukkan harga"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />

                        <div className="flex justify-between">
                            <button
                                type="submit"
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-10"
                            >
                                Simpan Data
                            </button>
                            <button
                                type="submit"
                                onClick={handleKembali}
                                className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 mt-10"
                            >
                                Kembali
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Dashboard;
