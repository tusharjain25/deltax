import React from 'react'
import Navbar from "./Navbar";
import { useState } from "react";
import { useMutation} from "@apollo/client";
import { CREATE_USER } from "../graphql/forartist/Mutations";

export default function AddArtist() {
    const [ inputartist,setartist] = useState({

        ArtistName:''!=null,
        Dob:''!=null,
        Bio:''!=null,
    
      })

      const [ createUser,] = useMutation(CREATE_USER)
      const handler1=(event)=>{
        setartist(event.target.value)
      }
      const handler2=(event)=>{
        setartist(event.target.value)
      }
      const handler3=(event)=>{
        setartist(event.target.value)
      }
      const Done=()=>{
        console.log(inputartist);
        createUser({
          variables:inputartist
        })
      }
  return (
    <>
    <Navbar/>
    <div>
      <div className="mt-5 mx-4 mb-3">
          <h2>Adding a new Artist</h2>
        </div>

        <form>
        <div className=" row mb-3 mx-4">
          <label htmlFor="ArtistName" className="col-sm-2 col-form-label">
            ArtistName
          </label>
          <div className="col-sm-4">
            <input type="text" className="form-control " name="SongName" onChange={handler1} value={inputartist.ArtistName}/>
          </div>
        </div>
        <div className="row mb-3 mx-4">
          <label htmlFor="Dob" className="col-sm-2 col-form-label">
            Dob
          </label>
          <div className="col-sm-4">
            <input type="date" className="form-control" name="DateofRelease" onChange={handler2} value={inputartist.Dob}/>
          </div>
        </div>
        <div className=" row mb-3 mx-4">
          <label htmlFor="Bio" className="col-sm-2 col-form-label">
            Bio
          </label>
          <div className="col-sm-4">
            <input type="text" className="form-control " name="SongName" onChange={handler3} value={inputartist.Bio}/>
          </div>
        </div>
        </form>
        <div className="mx-4">
                  <button type="button" className="btn btn-primary mb-3" onClick={Done}>
                    Done
                  </button>
                </div>
      
    </div>
    </>
  )
}
