'use client';

import { Provider } from 'react-redux';
import { store } from '@/shared/redux/store';
import { AudioPlayerProvider } from '@/shared/context/audioPlayerContext';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <AudioPlayerProvider>{children}</AudioPlayerProvider>
    </Provider>
  );
}
