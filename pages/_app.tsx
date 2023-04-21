import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { wrapper } from '../reducers/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div suppressHydrationWarning>
      {typeof window === 'undefined' ? null : <Component {...pageProps} />}
    </div>
  );
}

export default wrapper.withRedux(MyApp);
