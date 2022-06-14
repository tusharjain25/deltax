import React from 'react'
import UserList from '../components/UserList';
import SongList from '../components/SongList';
import Navbar from './Navbar';

export default function Home() {
  return (
    <>
    <Navbar/>
    <div  className='container mb-2 '>
    <button type="button" class="btn btn-secondary">+Add song</button> </div>
      <div className='container mb-5'> <SongList/></div>
      <div className='container'> <UserList/></div>
     
   
    </>
  )
}
