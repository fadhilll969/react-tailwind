import React from 'react'
import { Table } from 'react-bootstrap';

function Tabeltailwind() {

    const data2 = [
        { id: 1, nama_lengkap: "ambas", nama_belakang: "fadhil", username: "@padil" },
        { id: 2, nama_lengkap: "rezake", nama_belakang: "arianto", username: "ryutee" },
        { id: 3, nama_lengkap: "luminoir", nama_belakang: "lumi", username: "@noir" },
    ];
    return (
        <>
            <div className='grid grid-cols-3 -gap-4'>

                <div style={{ width: "500px", marginLeft: "10%" }}>
                    <h5>
                        Tabel 1
                    </h5>
                    <table className="border-separate border border-gray-400" style={{ width: "400px" }}>
                        <thead>
                            <tr>

                                <th class="border border-gray-300 ...">fullname</th>
                                <th class="border border-gray-300 ...">lastname</th>
                                <th class="border border-gray-300 ...">username</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data2.map((item) => (
                                <tr>
                                    <td className="border border-gray-300">{item.nama_lengkap}</td>
                                    <td className="border border-gray-300">{item.nama_belakang}</td>
                                    <td className="border border-gray-300 m-8">{item.username}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>


                <div style={{ width: "350px", marginLeft: "10%" }}>
                    <h5>
                        Tabel 2
                    </h5>
                    <table className="border-separate border border-gray-400" style={{ width: "400px" }}>
                        <thead>
                            <tr>

                                <th class="border border-gray-300 ...">fullname</th>
                                <th class="border border-gray-300 ...">lastname</th>
                                <th class="border border-gray-300 ...">username</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data2.map((item) => (
                                <tr>
                                    <td className="border border-gray-300">{item.nama_lengkap}</td>
                                    <td className="border border-gray-300">{item.nama_belakang}</td>
                                    <td className="border border-gray-300 m-8">{item.username}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>


                <div style={{ width: "350px", marginLeft: "10%" }}>
                    <h5>
                        Tabel 3
                    </h5>
                    <table className="border-separate border border-gray-400" style={{ width: "400px" }}>
                        <thead>
                            <tr>

                                <th class="border border-gray-300 ...">fullname</th>
                                <th class="border border-gray-300 ...">lastname</th>
                                <th class="border border-gray-300 ...">username</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data2.map((item) => (
                                <tr>
                                    <td className="border border-gray-300">{item.nama_lengkap}</td>
                                    <td className="border border-gray-300">{item.nama_belakang}</td>
                                    <td className="border border-gray-300 m-8">{item.username}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>


                <div style={{ width: "350px", marginLeft: "60%" }}>
                    <h5>
                        Tabel 4
                    </h5>
                    <table className="border-separate border border-gray-400" style={{ width: "400px" }}>
                        <thead>
                            <tr>

                                <th class="border border-gray-300 ...">fullname</th>
                                <th class="border border-gray-300 ...">lastname</th>
                                <th class="border border-gray-300 ...">username</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data2.map((item) => (
                                <tr>
                                    <td className="border border-gray-300">{item.nama_lengkap}</td>
                                    <td className="border border-gray-300">{item.nama_belakang}</td>
                                    <td className="border border-gray-300 m-8">{item.username}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>


                <div style={{ width: "350px", marginLeft: "60%" }}>
                    <h5>
                        Tabel 5
                    </h5>
                    <table className="border-separate border border-gray-400" style={{ width: "400px" }}>
                        <thead>
                            <tr>

                                <th class="border border-gray-300 ...">fullname</th>
                                <th class="border border-gray-300 ...">lastname</th>
                                <th class="border border-gray-300 ...">username</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data2.map((item) => (
                                <tr>
                                    <td className="border border-gray-300">{item.nama_lengkap}</td>
                                    <td className="border border-gray-300">{item.nama_belakang}</td>
                                    <td className="border border-gray-300 m-8">{item.username}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>


            </div>
        </>
    )
}

export default Tabeltailwind