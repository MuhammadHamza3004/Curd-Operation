import axios from "axios";
import React, { useEffect, useState } from "react";

const Read = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get("https://669e32ba9a1bda368005c884.mockapi.io/mockapi/Curdapi")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      });
    };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Read Operation</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <>
                <tr>
                  <th scope="row">{item.id} </th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>
                    <button className="btn-success">Edit</button>
                  </td>
                  <td>
                    <button className="btn-danger">Delete</button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Read;
