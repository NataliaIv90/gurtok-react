import { Link } from 'react-router-dom';
import { Button } from '../ui/button/Button';

export const Page404 = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Сторінку не знайдено</h1>
      <p>На жаль, такої сторінки не існує.</p>

      <Link to="/">
        <Button>Повернутись на головну</Button>
      </Link>
    </div>
  );
};
