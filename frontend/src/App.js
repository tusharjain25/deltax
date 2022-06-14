
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider, } from "@apollo/client";
import Addsong from './components/Addsong';
import AddArtist from './components/AddArtist';
import UserList from './components/UserList';
import SongList from './components/SongList';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';

function App() {
  const client = new ApolloClient({
    uri: 'http://localhost:4047/graphql',
    cache: new InMemoryCache(),

  });
  return (
    <>
    <ApolloProvider client={client}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          <Route path="AddArtist" element={<AddArtist />} />
          <Route path="AddSong" element={<Addsong/>} />
          <Route path="Userlist" element={<UserList />} />
          <Route path="Songlist" element={<SongList/>} />
        </Route>
      </Routes>
    </BrowserRouter>
   
    </ApolloProvider>
    </>
  );
 
}

export default App;
