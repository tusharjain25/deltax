
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider, } from "@apollo/client";
import UserList from './components/UserList';
import SongList from './components/SongList';

function App() {
  const client = new ApolloClient({
    uri: 'http://localhost:4047/graphql',
    cache: new InMemoryCache(),

  });
  return (
    <>
    <ApolloProvider client={client}>
     
    <div className='container'> <UserList/></div>
    <div className='container'><SongList/></div>
    </ApolloProvider>
    </>
  );
 
}

export default App;
