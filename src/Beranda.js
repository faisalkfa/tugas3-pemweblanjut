import React from 'react';
import './Beranda.css';
import Article from './Article';

const articles = [
  {
    id: 1,
    title: 'Apa Itu React JS?',
    content: 'ReactJS adalah library JavaScript populer yang digunakan dalam pengembangan aplikasi web. ReactJS, yang juga sering disebut sebagai React, merupakan salah satu pilihan terbaik untuk membangun antarmuka pengguna yang interaktif dan dinamis.',
    continuation: (
      <div style={{ textAlign: 'justify' }}>
        <br></br>
        <p>Beberapa ciri khas dan konsep utama dari React.js adalah:</p>
        <p>Komponen: Aplikasi React dibangun menggunakan komponen-komponen UI yang dapat digunakan kembali. Setiap komponen menggambarkan sebagian kecil dari antarmuka pengguna dan dapat digunakan berulang kali dalam aplikasi.</p>
        <p>Virtual DOM: React menggunakan konsep Virtual DOM untuk meningkatkan kinerja. Virtual DOM adalah representasi virtual dari struktur DOM aktual, yang memungkinkan React untuk memperbarui hanya bagian dari halaman web yang berubah, bukan seluruh halaman.</p>
        <p>Reaktivitas: React memungkinkan pengembang untuk mengatur pembaruan tampilan UI berdasarkan perubahan data atau kejadian tertentu. Ini membuat pengembangan aplikasi menjadi lebih reaktif dan responsif.</p>
        <p>JSX: JSX adalah ekstensi JavaScript yang digunakan dalam React untuk menulis komponen UI. Ini memungkinkan pengembang untuk menulis kode yang mirip dengan HTML untuk menggambarkan tampilan, sambil tetap menggunakan JavaScript di dalamnya.</p>
        <p>Komponen State: React memungkinkan komponen memiliki state internal, yang dapat digunakan untuk menyimpan dan mengelola data yang dapat berubah seiring waktu.</p>
        <p>Ekosistem Luas: React memiliki ekosistem yang luas, termasuk berbagai alat dan pustaka tambahan yang memungkinkan pengembang untuk membangun berbagai jenis aplikasi, seperti React Router untuk mengelola navigasi, Redux untuk mengelola keadaan aplikasi, dan banyak lagi.</p>
      </div>
    ),
  },
  {
    id: 2,
    title: 'Menggunakan Komponen React',
    content: 'Komponen React memungkinkan Anda untuk memisahkan UI menjadi potongan-potongan yang dapat dikelola secara terpisah. Dengan menggunakan komponen, Anda dapat mengorganisir kode Anda menjadi unit-unit yang lebih kecil, yang membuatnya lebih mudah dikelola, dipahami, dan diperbarui.',
    continuation: (
      <div style={{ textAlign: 'justify' }}>
        <br></br>
        <p>Manfaat utama penggunaan komponen React adalah:</p>
        <p>1. Reusability: Anda dapat menggunakan komponen yang sama dalam berbagai bagian aplikasi Anda, menghemat waktu dan usaha dalam pengembangan.</p>
        <p>2. Maintainability: Kode yang dibagi menjadi komponen lebih mudah dipahami dan dikelola. Perubahan atau perbaikan hanya perlu dilakukan pada komponen yang relevan tanpa memengaruhi bagian lain dari aplikasi.</p>
        <p>3. Isolasi: Setiap komponen beroperasi dalam isolasi, sehingga kesalahan dalam satu komponen tidak memengaruhi komponen lain.</p>
        <p>4. Pengujian (Testing): Pengujian komponen secara terpisah menjadi lebih mudah.</p>
      </div>
    ),
  },
  {
    id: 3,
    title: 'React Router untuk Navigasi',
    content: 'Navigasi adalah bagian penting dari banyak aplikasi web. Dalam dunia React, Anda dapat dengan mudah menambahkan navigasi yang responsif dan dinamis menggunakan React Router. Ini adalah pustaka yang populer dan kuat untuk mengelola navigasi dalam aplikasi React Anda.',
    continuation: (
      <div style={{ textAlign: 'justify' }}>
        <br></br>
        <p>React Router menyediakan komponen-komponen khusus yang memungkinkan Anda untuk mengatur navigasi dalam aplikasi Anda. Beberapa fitur utama dari React Router termasuk:</p>
        <p>1. Pengaturan Rute (Route Configuration): Anda dapat dengan mudah menentukan rute-rute yang akan digunakan dalam aplikasi Anda dan menghubungkannya ke komponen-komponen yang sesuai.</p>
        <p>2. Navigasi Berbasis Tautan (Link-Based Navigation): Anda dapat membuat tautan-tautan yang mengarah ke rute-rute tertentu sehingga pengguna dapat dengan mudah berpindah antara halaman-halaman berbeda.</p>
        <p>3. Nesting Rute (Nested Routes): Anda dapat menyusun rute-rute dalam hierarki berdasarkan tampilan yang ingin Anda buat.</p>
        <p>4. Lokasi (Location) dan Riwayat (History): Anda memiliki akses ke lokasi saat ini dan riwayat navigasi pengguna melalui objek-objek yang disediakan oleh React Router.</p>
      </div>
    ),
  },
];

function Beranda() {
  return (
    <div className="beranda-container">
      <header>
        <h1>Selamat Datang</h1>
      </header>
      <main>
        {articles.map((article) => (
          <Article key={article.id} article={article} />
        ))}
      </main>
    </div>
  );
}

export default Beranda;
export { articles };
