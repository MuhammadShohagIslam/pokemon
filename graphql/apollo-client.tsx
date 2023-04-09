import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const ApolloClientProvider = ({ children }: React.PropsWithChildren<{}>) => {

    const client = new ApolloClient({
        uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
        cache: new InMemoryCache(),
    });
    
    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    )
};

export default ApolloClientProvider;