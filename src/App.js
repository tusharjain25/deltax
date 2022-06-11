
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider, } from "@apollo/client";
import UserList from './components/UserList';

function App() {
  const client = new ApolloClient({
    uri: 'http://localhost:4047/graphql',
    cache: new InMemoryCache(),

  });
  return (
    <>
    <ApolloProvider client={client}>
    <h1>hello</h1>
   <UserList/>
    </ApolloProvider>
    </>
  );
 
}

export default App;
