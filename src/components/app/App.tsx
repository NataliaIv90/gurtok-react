import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Genres, Page404 } from '@/components';

export const App = () => {
  return (
    <BrowserRouter>
      <nav style={{ display: 'flex', gap: '10px' }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Genres />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};
