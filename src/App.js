import {BrowserRouter,Routes, Route} from 'react-router-dom';
import React from 'react';
import Crud from './crudOperations/Crud'
import Form from './crudOperations/crudForm';
import Update from './crudOperations/Update.js';

// import Form from '.Form';
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <div> 
    <BrowserRouter>
<Routes>
     
    <Route  exact path='/' element={<Form/>}></Route>
    <Route  exact path='/Crud' element={<Crud/>}></Route>
     
    
    <Route  exact path='/Update' element={<Update/>}></Route>
     
     
    
</Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;

