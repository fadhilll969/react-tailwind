import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    asklh: "",
    password: "",
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
      const response = await axios.post
        ('http://localhost:5000/users', formData);
      console.log('Register success:', response.data);

      alert('Pendaftaran berhasil!');
      navigate('/login');
    } catch (error) {
      console.error('Error register:', error);
      alert('Terjadi kesalahan saat mendaftar.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex item-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-100 h-120 max-w-sm mt-30">
        <h1 className="text-2x1 font-bold text-center mb-6 ">Format Pendaftaran</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="Name"
            >
              Nama Lengkap Siswa
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Masukan teks"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Masukan teks"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus"
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="masukan teks"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="p"
            >
              Asal Sekolah
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="sklh"
              type="sklh"
              name="sklh"
              value={formData.sklh}
              onChange={handleChange}
              placeholder="Masukan teks"
              required
            />
          </div>


          <div className="flex justify-center items-center justify-between">
       <Link to="/sidnav">
            <button
              className="bg-blue-500 hover:bg-blue-70 text-white font-bold py-2 px-7 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              >
              KIRIM
            </button>
                </Link>
       

          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;