import React from 'react';
import './Tentang.css';
import logo from './logo.png'; 

function Tentang() {
  return (
    <main className="tentang-container">
      <h2>Tentang Saya</h2>
      <div className="profil">
        <img src={logo} alt="Logo" className="foto-pembuat" />
        <div className="informasi-pembuat">
          <h3>Faisal Khairul Fasha </h3>
          <h3>120140158 </h3>
          <p>
             Web Blog Ini Dibuat Untuk Menyelesaikan Tugas 3 Pemrograman Web Lanjut.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Tentang;