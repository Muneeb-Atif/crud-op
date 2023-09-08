import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Update = () => {
  const [id, setid] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setid(localStorage.getItem('id'));
    setName(localStorage.getItem('name'));
    setEmail(localStorage.getItem('email'));
    console.log(localStorage,'data')
  }, []);

  const handleupdate = (e) => {
    e.preventDefault();
    
    axios.put(`https://64d4c2a5b592423e4694a3ea.mockapi.io/crud-muneeb/${id}`, {
      name: name,
      email: email,
      id: id
    })
    .then(() => {
      setEmail('');
      setName('');
      navigate('/Crud');
    })
    .catch((err) => {
      console.error("Update error:", err);
    });
  };

  return (
    <>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
      
        <button type="submit" className="btn btn-primary" onClick={handleupdate}>Update</button>
<Link to ='/Crud'>
    <button className="btn btn-secondary mx-2"> Back </button>
</Link>
      </form>
    </>
  );
};

export default Update;
