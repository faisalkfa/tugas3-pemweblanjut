import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Kontak from './Kontak';

test('Menguji apakah komponen Kontak merender dengan benar', () => {
  const { getByText, getByLabelText } = render(<Kontak />);

  const namaLabel = getByLabelText('Nama:');
  const emailLabel = getByLabelText('Email:');
  const pesanLabel = getByLabelText('Pesan:');
  const kirimButton = getByText('Kirim Pesan');

  expect(namaLabel).toBeInTheDocument();
  expect(emailLabel).toBeInTheDocument();
  expect(pesanLabel).toBeInTheDocument();
  expect(kirimButton).toBeInTheDocument();
});

test('Menguji fungsi pengiriman pesan', () => {
  const { getByText, getByLabelText } = render(<Kontak />);

  const namaInput = getByLabelText('Nama:');
  const emailInput = getByLabelText('Email:');
  const pesanInput = getByLabelText('Pesan:');
  const kirimButton = getByText('Kirim Pesan');

  fireEvent.change(namaInput, { target: { value: 'John Doe' } });
  fireEvent.change(emailInput, { target: { value: 'johndoe@example.com' } });
  fireEvent.change(pesanInput, { target: { value: 'Pesan uji coba' } });

  fireEvent.click(kirimButton);

  const notifikasiPesanTerkirim = getByText('Pesan telah terkirim.');
  expect(notifikasiPesanTerkirim).toBeInTheDocument();
});
