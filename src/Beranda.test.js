import React from 'react';
import { render, screen } from '@testing-library/react';
import Beranda from './Beranda';
import { articles } from './Beranda'; 

const mockArticles = [
  {
    id: 1,
    title: 'Apa Itu React JS?',
    content: '... (isi artikel pertama) ...',
  },
  {
    id: 2,
    title: 'Menggunakan Komponen React',
    content: '... (isi artikel kedua) ...',
  },
  {
    id: 3,
    title: 'React Router untuk Navigasi',
    content: '... (isi artikel ketiga) ...',
  },
];


jest.mock('./Article', () => {
  return function MockArticle({ article }) {
    return (
      <div>
        <h2>{article.title}</h2>
        <p>{article.content}</p>
      </div>
    );
  };
});

test('Menguji apakah artikel-artikel ditampilkan dengan benar', () => {
    render(<Beranda />);
    const titles = articles.map((article) => screen.getByText(article.title));
    const contents = articles.map((article) => screen.getByText(article.content));
  
    titles.forEach((title) => expect(title).toBeInTheDocument());
    contents.forEach((content) => expect(content).toBeInTheDocument());
  });