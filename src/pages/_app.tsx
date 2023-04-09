import {  ApolloProvider } from '@apollo/client';
import { client } from '../../graphql/apollo-client';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import "swiper/swiper.min.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
