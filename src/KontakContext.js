import { createContext, useContext, useState } from 'react';

const KontakContext = createContext();

export function useKontak() {
  return useContext(KontakContext);
}

export function KontakProvider({ children }) {
  const [pesan, setPesan] = useState('');

  const kirimPesan = (pesan) => {
    setPesan(pesan);
  };

  return (
    <KontakContext.Provider value={{ pesan, kirimPesan }}>
      {children}
    </KontakContext.Provider>
  );
}
