import React, { useState } from 'react';
import './Kontak.css';
import InformasiKontak from './InformasiKontak';

function Kontak() {
  const initialFormData = {
    name: '',
    email: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isPesanTerkirim, setIsPesanTerkirim] = useState(false);

  const handleKirimPesan = () => {
    setIsPesanTerkirim(true);
    // Atur ulang formulir
    setFormData(initialFormData);

    // Merefresh halaman
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="kontak-container">
      <h2>Hubungi Saya</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nama:</label>
          <input
            type="text"
            id="name" 
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Pesan:</label>
          <textarea
            id="message" 
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <button onClick={handleKirimPesan} className="btn-submit">
          Kirim Pesan
        </button>
      </form>
      <InformasiKontak />
      {isPesanTerkirim && (
        <div className={"pesan-notifikasi " + (isPesanTerkirim ? "tampil" : "")}>Pesan telah terkirim.</div>
      )}
    </div>
  );
}

export default Kontak;
