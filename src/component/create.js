import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Create = () => {
const [name,setName] = useState('')
const [email,setEmail] = useState('')

const history= useNavigate()


const handleSubmit = (event) => {
 
  event.preventDefault();
  axios
    .post("https://669e32ba9a1bda368005c884.mockapi.io/mockapi/Curdapi", {
      name: name,
      email: email,
    })
    .then(() =>{
       history('/read')
    })

   
    setName('')
    setEmail('')
    console.log("clciekd");
};

  return (
    <form className="container">
      <h1>Create</h1>
      <div classNameName="mt-3  row align-items-start ">
        <label for="exampleInputEmail1" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          aria-describedby="emailHelp"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input type="text"
         className="form-control"
         value={email}
         onChange={(e)=>setEmail(e.target.value)}
         />
      </div>
      <div className="mb-3 form-check"></div>
      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
        Submit
      </button>
      
    </form>
  );
};
