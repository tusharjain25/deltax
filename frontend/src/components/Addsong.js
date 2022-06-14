import React  from "react";
import Navbar from "./Navbar";
import { useState } from "react";

export default function Addsong() {
  const [ inputsong,setinputsong] = useState({

    SongName:'',
    DateofRelease:'',
    Cover:'',

  })
  const inputhandler1=(event)=>{
    setinputsong(event.target.value)
  }
  const inputhandler2=(event)=>{
    setinputsong(event.target.value)
  }
  const inputhandler3=(event)=>{
    setinputsong(event.target.value)
  }
  const songsubmit=()=>{
    console.log(inputsong);
  }
  return (
    <>
     <Navbar/>
      
        <div className="mt-5 mx-4 mb-3">
          <h2>Adding a new song</h2>
        </div>

        <form>
        <div className=" row mb-3 mx-4">
          <label htmlFor="SongName" className="col-sm-2 col-form-label">
            SongName
          </label>
          <div className="col-sm-4">
            <input type="text" className="form-control " name="SongName" onChange={inputhandler1} value={inputsong.SongName}/>
          </div>
        </div>
        <div className="row mb-3 mx-4">
          <label htmlFor="DateofRelease" className="col-sm-2 col-form-label">
            Date of release
          </label>
          <div className="col-sm-4">
            <input type="date" className="form-control" name="DateofRelease" onChange={inputhandler2} value={inputsong.DateofRelease}/>
          </div>
        </div>
        </form>
        <div className="row mb-3 mx-4">
          <div className="col-sm-2">
                <label htmlFor="formFile " className="col-sm-2 col-form-label ">
                  Artwork
                </label>
          </div>
                <div className="col-sm-4">
                  <input className="form-control " type="file" name="formFile" onClick={inputhandler3} value={inputsong.Cover} />
                </div>
        </div>

          <form className="row g-3 mx-4 mb-3">
                      <div className="col-sm-2">
                          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                            Artist
                          </label>
                      </div>

                      <div className="col-sm-2 ">
                        <select className="form-select" aria-label="Default search example">
                          <option value=""> Select Artist </option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    <div className="col mx-3">
                      <button type="submit" className="btn btn-primary mb-3">
                        + Add Artist
                      </button>
                    </div>
          </form>
       
        
                <div className="mx-4">
                  <button type="button" className="btn btn-primary mb-3" onClick={songsubmit}>
                    Submit
                  </button>
                </div>
      
    </>
  );
}
