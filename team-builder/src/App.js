import './App.css';
import React, { useState } from 'react';
import Form from './components/Form';
import Friend from './components/Friend';

const initialFormValues = {
  username: '',
  email: '',
  role: '',

}

const friendList = [
  { username: 'Tim', email: 'tims@gmail.com', role: 'Intermediate Programmer'}
]


function App() {
  const [people, setPeople] = useState(friendList);

  const [formValues, setFormValues] = useState(initialFormValues);

  const [errorMessage, setErrorMessage] = useState('');

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue});
  }

  const submitForm = () => {

    const newPerson = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }

    if(!newPerson.username) {
      setErrorMessage('You need to enter a username!')
    } else if (!newPerson.email) {
      setErrorMessage('You need to enter an email!')
    } else if (!newPerson.role) {
      setErrorMessage('Please select your role!')
    } else {
      setErrorMessage('');
    }

    setPeople([newPerson, ...people]);
  }


  return (
   <div className="container">
     <h1>List of our Friends!</h1>
     {errorMessage && <p>{errorMessage}</p>}
     <Form 
     update={updateForm}
     values={formValues}
     submit={submitForm}
     />
     {
       people.map(user => {
         return (
           <Friend key={user.id} info={user} />
         )
       })
     }
     
   </div>
  );
}

export default App;
