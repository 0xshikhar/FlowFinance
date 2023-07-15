import '@/src/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import { blackTheme, GlobalStyle } from '../design/themes';
import Layout from '../components/Layout';

import MainLayout from "../layout/mainLayout";
import { useRouter } from "next/router";
import Head from 'next/head';

const queryClient = new QueryClient();


export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <ThemeProvider theme={blackTheme}>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <Head>
          <title>Flow Finance</title>
          <meta property="og:title" content="Flow Finance" key="title" />
        </Head>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </QueryClientProvider>
    </ThemeProvider>
  )
}
