import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';


const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://64d4c2a5b592423e4694a3ea.mockapi.io/crud-muneeb', {
      name: name,
      email: email,
    });

    setEmail('');
    setName('');
    history('/Crud');
  };

  return (
    <div className='centered-form'>
      {/* <Container>
        <Row> */}
          {/* <Col lg={5}> */}
            <div className='abc'>
              <h2>Create</h2>
              <Link to='/Crud'>
                <button className='btn btn-primary'> Show Data </button>
              </Link>
            </div>
            <form className='form-container' onSubmit={handleSubmit}>
              <div className='mb-3'>
                <label className='form-label'>Name</label>
                <input
                  type='text'
                  className='form-control'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className='mb-3'>
                <label className='form-label'>Email address</label>
                <input
                  type='email'
                  className='form-control'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button type='submit' className='btn btn-primary'>
                Submit
              </button>
            </form>
          {/* </Col> */}
        {/* </Row>
      </Container> */}
    </div>
  );
};

export default Form;
