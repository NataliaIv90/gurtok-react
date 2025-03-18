import { FunctionComponent } from 'react';
import './Header.css';
import { Button } from '@components/index';
import { useTheme } from '@context/ThemeContext';

export const Header: FunctionComponent = () => {
  const { toggleTheme } = useTheme();

  return (
    <header className='header'>
      <p>App</p>
      <Button onClick={toggleTheme} text='🌞/🌑' />
    </header>
  );
};
