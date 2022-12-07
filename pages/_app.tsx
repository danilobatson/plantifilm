import 'bootstrap/dist/css/bootstrap.css';
import type { AppProps } from 'next/app';

import { GlobalContextProvider } from '../contexts/globalContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    //@ts-ignore

    // Wrap the app in the GlobalContextProvider
    <GlobalContextProvider>
      <Component {...pageProps} />
    </GlobalContextProvider>
  );
}
