import { FunctionComponent, useState } from 'react';
import './Counter.css';
import { Button } from '@components/index';

export const Counter: FunctionComponent = () => {
  const [number, setNumber] = useState(0);

  const increaseNumber = () => setNumber(prevNumber => prevNumber + 1);
  const decreaseNumber = () => setNumber(prevNumber => Math.max(0, prevNumber - 1));

  return (
    <div className='Counter'>
      <Button text="-" onClick={decreaseNumber} />
      <p>{number}</p>
      <Button text="+" onClick={increaseNumber} />
    </div>
  );
};
