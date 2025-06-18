import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Page404 } from '@/components';
import { Player } from '../player/Player';
import { Header } from '../header/Header';

export const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<div>Оберіть жанр</div>} />
        <Route path="/:genre" element={<Player />} />
        <Route path="/:genre/:trackIndex" element={<Player />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};
