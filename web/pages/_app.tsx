import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

export default function App({ Component, pageProps }: AppProps) {
  const cache = new InMemoryCache();
  const client = new ApolloClient({
    uri: `${process.env.NEXT_PUBLIC_BACKEND_URL}/graphql`,
    cache,
  });

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
