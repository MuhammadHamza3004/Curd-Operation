import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const Create = () => {
  const [formData , setFormData] =useState({})
  const navigation= useNavigate()
  const location = useLocation()



  const getdata = (e) => {
    let {name,value}= e.target;

   let input = {[name]:value}
   setFormData({...formData,...input})

  };
  
  const handleSubmit = (e) => {
    e.preventDefault()
      axios.post("https://669e32ba9a1bda368005c884.mockapi.io/mockapi/Curdapi",
      formData
      )
      .then(() =>{
          alert("data,sent")
          navigation("/read")
        })
        .catch((error)=>{
          console.log(error,"error")
        })
       
      };
      
      useEffect(()=>{
        if(location?.state?.data){
          setFormData(location?.state?.data)
        }
      },[formData])

  console.log(formData.name)

      
  return (
    <form className="container">
      <h1>Create</h1>
      <div classNameName="mt-3  row align-items-start ">
        <label for="exampleInputEmail1" className="form-label">
          Name
        </label>
        <input
          // type="text"
          className="form-control"
          aria-describedby="emailHelp"
          name="name"
          value={formData.name}
          onChange={(e) => getdata(e)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          // type="text"
          className="form-control"
          name="email"
          value={formData.email}
          onChange={(e) => getdata(e)}
        />
      </div>
      <div className="mb-3 form-check"></div>
      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};
