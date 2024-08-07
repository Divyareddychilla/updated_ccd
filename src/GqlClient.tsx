import "./style.scss";
import { setContext } from '@apollo/client/link/context';
import { ApolloClient, InMemoryCache,ApolloProvider, HttpLink, split, ApolloLink } from '@apollo/client';
import { useDispatch, useSelector } from "react-redux";
import {actions as userAuthActions} from './store/activeUserData/reducer'
import { RootState } from "./store";
import { useEffect } from "react";
import { getMainDefinition } from '@apollo/client/utilities';

import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { onError } from '@apollo/client/link/error';
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
    );
  }
  if (networkError) console.log(`[Network error]: ${networkError}`);
});
const apiKey = import.meta.env.VITE_BASE_URL;
const websocketurl = import.meta.env.VITE_GRAPHQL_WS_URL;
console.log(apiKey,'@apikey');

interface Props {
    children: React.ReactNode;
}

function Gqlclient(props:Props) {
  const dispatch = useDispatch();
  const { token } = useSelector((state: RootState) => state.active_user_data.userAuth);

  useEffect(() => { 
    const local_token = localStorage.getItem('token');
    if(local_token && token === null){
        dispatch(userAuthActions.setToken(local_token));
    }
  },[token]);

  const httpLink = new HttpLink({
    uri: import.meta.env.VITE_GRAPHQL_URL,
  });
  const wsLink = new GraphQLWsLink(createClient({
    url: websocketurl,
  }));
  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });




  const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      );
    },
    wsLink,
    authLink.concat(httpLink),
  );
  const client = new ApolloClient({
    link: ApolloLink.from([errorLink,splitLink]),
    cache: new InMemoryCache()
  });

  return (
    <ApolloProvider client={client}>
      {props.children}
    </ApolloProvider>
  );
}

export default Gqlclient;