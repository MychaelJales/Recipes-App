import { ScopedCssBaseline } from '@mui/material';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { RecipesProvider } from '../context/Context';

function App({ Component, pageProps }: AppProps) {
  return (
    <RecipesProvider>
      <ScopedCssBaseline>
        <Head>
          <title>Boilerplate NextJS</title>
          <meta
            name="description"
            content="A simple project starter to work with TypeScript, Reac, NextJS and Styled Components"
          />
        </Head>
        <Component {...pageProps} />
      </ScopedCssBaseline>
    </RecipesProvider>
  );
}

export default App;
