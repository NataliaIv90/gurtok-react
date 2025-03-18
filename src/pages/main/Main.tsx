import { FunctionComponent } from 'react';
import './Main.css';
import { Counter } from '@components/index';

export const Main: FunctionComponent = () => {
  return (
    <main className='main'>
      <Counter/>
    </main>
  );
};
