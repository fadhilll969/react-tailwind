import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditData() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        Makanan: "",
        paket: "",
        harga: "",
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/menu/${id}`);
                const data = Array.isArray(res.data) ? res.data[0] : res.data;
                setFormData(data);
            } catch (err) {
                console.error("Gagal mengambil data:", err);
                alert("Gagal mengambil data!");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`http://localhost:5000/menu`, formData);
            alert("Data berhasil diubah!");
            navigate("/tabeldata");
        } catch (err) {
            console.error("Gagal mengupdate data:", err);
            alert("Gagal mengupdate data!");
        }
    };

    if (loading) return <p className="text-center mt-10">Loading data...</p>;

    return (
        <div className="container mx-auto p-4 max-w-lg">
            <h1 className="text-3xl font-bold mb-6 text-center">Edit Data</h1>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 space-y-4">
                <div>
                    <label htmlFor="Makanan" className="block text-gray-700 text-sm font-bold mb-2">
                        Makanan
                    </label>
                    <input
                        id="Makanan"
                        name="Makanan"
                        type="text"
                        value={formData.Makanan || ""}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full px-3 py-2"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="paket" className="block text-gray-700 text-sm font-bold mb-2">
                        Paket
                    </label>
                    <input
                        id="paket"
                        name="paket"
                        type="text"
                        value={formData.paket || ""}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full px-3 py-2"
                    />
                </div>

                <div>
                    <label htmlFor="harga" className="block text-gray-700 text-sm font-bold mb-2">
                        Harga
                    </label>
                    <input
                        id="harga"
                        name="harga"
                        type="number"
                        value={formData.harga || ""}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full px-3 py-2"
                        required
                    />
                </div>

                <div>
                    <Link to="/dashboard">
                    <button
                        type="submit"
                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
                        >
                        Edit
                    </button>
                        </Link>
                </div>
            </form>
        </div>
    );
}

export default EditData;
