import '@/styles/globals.css'
import type { AppProps } from 'next/app';
import ApolloClientProvider from '../../graphql/apollo-client';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloClientProvider>
      <Component {...pageProps} />
    </ApolloClientProvider>
  )
}
