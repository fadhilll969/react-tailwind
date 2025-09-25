import React from 'react';
// Asumsi Anda menggunakan CSS/styling yang relevan,
// misalnya dengan Tailwind CSS, styled-components, atau CSS biasa.

// --- Data Contoh (Mock Data) ---
const ppdbStats = {
  totalPendaftar: 120,
  diterima: 80,
  cadangan: 15,
};

const transactionData = [
  { no: 1, makanan: "nasi goreng", paket: "paket 1", harga: "100000" },
  { no: 2, makanan: "gigh", paket: "kb434b", harga: "4123845" },
  // Tambahkan data lain sesuai kebutuhan
];

// --- Komponen Statistik PPDB ---
const PpdbStatistics = ({ stats }) => (
  <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px', borderBottom: '1px solid #ccc' }}>
    <StatBox title="Total Pendaftar" value={stats.totalPendaftar} />
    <StatBox title="Diterima" value={stats.diterima} color="green" />
    <StatBox title="Cadangan" value={stats.cadangan} color="orange" />
  </div>
);

// Sub-Komponen Kotak Statistik
const StatBox = ({ title, value, color }) => (
  <div style={{
    textAlign: 'center',
    padding: '10px 20px',
    border: '1px solid #eee',
    borderRadius: '5px',
    minWidth: '150px'
  }}>
    <div style={{ fontSize: '14px', color: '#666' }}>{title}</div>
    <div style={{ fontSize: '24px', fontWeight: 'bold', color: color || '#333' }}>{value}</div>
  </div>
);

// --- Komponen Tabel Daftar Pendaftar/Transaksi ---
const DaftarTabel = ({ data }) => (
  <div style={{ margin: '20px' }}>
    <h3>Daftar Pendaftar (atau Transaksi)</h3>
    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
      <thead>
        <tr style={{ backgroundColor: '#f2f2f2' }}>
          <th style={tableHeaderStyle}>No</th>
          <th style={tableHeaderStyle}>Makanan</th>
          <th style={tableHeaderStyle}>Paket</th>
          <th style={tableHeaderStyle}>Harga</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.no} style={{ borderBottom: '1px solid #eee' }}>
            <td style={tableCellStyle}>{item.no}</td>
            <td style={tableCellStyle}>{item.makanan}</td>
            <td style={tableCellStyle}>{item.paket}</td>
            <td style={tableCellStyle}>{item.harga}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// Style sederhana untuk tabel
const tableHeaderStyle = { padding: '10px', textAlign: 'left', border: '1px solid #ccc' };
const tableCellStyle = { padding: '10px', textAlign: 'left', border: '1px solid #eee' };


// --- Komponen Utama Dashboard ---
const DashboardPPDB = () => (
  <div style={{
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '900px',
    margin: '40px auto' // Menengahkan di layar
  }}>
    {/* Header */}
    <div style={{ padding: '15px', backgroundColor: '#333', color: 'white' }}>
      <h2>Dashboard PPDB SMK Bina Nusantara</h2>
    </div>

    {/* Konten Utama - Asumsi ada Sidebar dan Konten */}
    <div style={{ display: 'flex' }}>
      {/* Sidebar Sederhana */}
      <div style={{ width: '200px', backgroundColor: '#f7f7f7', padding: '20px', borderRight: '1px solid #eee' }}>
        <p>Dashboard</p>
        <p>Data Seleksi</p>
        {/* Konten sidebar lainnya */}
      </div>

      {/* Konten Dashboard */}
      <div style={{ flexGrow: 1, padding: '20px' }}>
        {/* Bagian Statistik */}
        <PpdbStatistics stats={ppdbStats} />

        {/* Bagian Tabel Data */}
        <DaftarTabel data={transactionData} />
      </div>
    </div>
  </div>
);

// Ekspor komponen utama agar bisa digunakan di file lain
export default DashboardPPDB;

// Catatan: Untuk menjalankan kode ini, Anda perlu menggunakannya di dalam 
// lingkungan proyek React, dan Anda mungkin perlu mengganti inline style 
// dengan file CSS atau framework CSS seperti Tailwind/Bootstrap untuk tampilan yang lebih baik.