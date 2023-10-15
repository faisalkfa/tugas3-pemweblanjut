import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';
import Beranda from './Beranda';
import Tentang from './Tentang';
import Kontak from './Kontak';
import { KontakProvider } from './KontakContext';

function App() {
  return (
    <Router>
      <Header />
      <MainContent>
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route
            path="/kontak"
            element={
              <KontakProvider>
                <Kontak />
              </KontakProvider>
            }
          />
        </Routes>
      </MainContent>
      <Footer />
    </Router>
  );
}

export default App;
