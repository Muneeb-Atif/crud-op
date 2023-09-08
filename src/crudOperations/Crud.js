import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const Crud = () => {
  const [data, setData] = useState([]);
  const setToLocalstorage = (id, name, email) => {
   localStorage.setItem('id',id)
   localStorage.setItem('name',name)
   localStorage.setItem('email',email)
  }
  useEffect(() => {
    getData();
  }, []);

  function getData() {
    axios.get('https://64d4c2a5b592423e4694a3ea.mockapi.io/crud-muneeb')
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  function handleDelete(id) {
    axios.delete(`https://64d4c2a5b592423e4694a3ea.mockapi.io/crud-muneeb/${id}`
    ).then(() => {
      getData();
    })
      .catch((error) => {
        console.error("Error deleting data:", error);
      });
  }

  return (
    <>
      <h2>Read operation</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((eachData) => (
            <tr key={eachData.id}>
              <th scope="row">{eachData.id}</th>
              <td>{eachData.name}</td>
              <td>{eachData.email}</td>
              <td>@mdo</td>
              <td>
                <Link to='/Update'>
                  <button className='btn-success' onClick={() => setToLocalstorage(eachData.id, eachData.name, eachData.email)}>Edit</button>
                </Link>
              </td>
              <td><button className='btn-Danger' onClick={() => handleDelete(eachData.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Crud;
