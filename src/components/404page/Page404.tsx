import { Link } from 'react-router-dom';

export const Page404 = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Сторінку не знайдено</h1>
      <p>На жаль, такої сторінки не існує.</p>
      <Link to="/">Повернутись на головну</Link>
    </div>
  );
};
