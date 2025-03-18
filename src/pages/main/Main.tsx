import { FunctionComponent } from 'react';
import { Counter, Liker } from '@components/index';
import img from '@/assets/img.jpg';

import './Main.css';

export const Main: FunctionComponent = () => {
  return (
    <main className='main'>
      <p className='center'>Let's count all together!</p>
      <Counter/>

      <figure className='image-wrapper'>
        <img src={img} alt="Dog image" className='image'/>
        <figcaption>Funny dog asking for your like</figcaption>
      </figure>

      <p className='center'>Do you like this app?</p>
      <div className='center'>
        <Liker />
        </div>
    </main>
  );
};
