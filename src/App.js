import { useEffect, useState } from 'react';
import './App.css';


function App() {
  const [values, setValues]= useState({
    firstName:"",
    lastName:"",
    email:""
  });

  const [submitted, setSubmitted] = useState(false)

  const handleFirstNameInputChange = (event) => {  
    setValues({...values, firstName:event.target.value})  
  }

  const handleLastNameInputChange = (event) => {  
    setValues({...values, lastName:event.target.value})  
  }

  const handleEmailInputChange = (event) => {  
    setValues({...values, email:event.target.value})  
  } 

  const handleSubmit = (e) =>{
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="register-form">
        {submitted ? <div className="success-message">Success! Thank you for registering</div> : null}
        <input onChange={handleFirstNameInputChange}
          value={values.firstName}
          className="form-field"
          placeholder="First Name"
          name="firstName"/>
        {submitted && !values.firstName ? <span>please enter your first name</span>:null}
        {submitted && !values.firstName ? setSubmitted(false):null}

        <input onChange={handleLastNameInputChange}
          value={values.lastName}
          className="form-field"
          placeholder="Last Name"
          name="lastName"/> 
        <input onChange={handleEmailInputChange} 
          value={values.email}
          className="form-field"
          placeholder="Email"
          name="email"/> 
        <button className="form-field" type="submit">Register</button>
      </form>      
    </div>
  );
}

export default App;
