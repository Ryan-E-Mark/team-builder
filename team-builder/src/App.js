import './App.css';
import React, { useState } from 'react';
import Form from './components/Form';

const initialFormValues = {
  username: '',
  email: '',
  role: '',

}


function App() {
  const [people, setPeople] = useState([]);

  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue});
  }

  const submitForm = () => {
    
  }


  return (
   <div className="container">
     <h1>List of our Friends!</h1>
     <Form 
     update={updateForm}
     values={formValues}
     submit={submitForm}
     />
   </div>
  );
}

export default App;
