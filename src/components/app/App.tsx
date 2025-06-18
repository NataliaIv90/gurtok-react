import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Page404 } from '@/components';
import { GenreSongsPage } from '../genreSongsPage/GenresSongsPage';
import { Header } from '../header/Header';

export const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<div>Оберіть жанр</div>} />
        <Route path="/:genre" element={<GenreSongsPage />} />
        <Route path="/:genre/:trackIndex" element={<GenreSongsPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};
