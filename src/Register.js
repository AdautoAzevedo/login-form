import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Form from './Form';

const Register = ({user, setUser}) => {
  const [isValid, setIsValid] = useState(false);
  const [validationError, setValidationError] = useState('');   //We can set the error message here, to display it to the user
  const navigate = useNavigate();


  const registerUser = async () =>{
    const baseURL = "http://localhost:3500/api";
    try {
        const response = await fetch(baseURL,{
          method:"POST",
          headers:{
              "Content-type":"application/json"
          }, 
          body:JSON.stringify(user)
        });
        
        if (!response.ok){
          const message = response.status;
          throw new Error(message);
        }
        navigate("/home");
    } catch (error) {
        console.log(error);
    };
  };

  const validateForm = () =>{
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    setIsValid(passwordPattern.test(user.password));
    if (!isValid){
      setValidationError("Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character, and be at least 8 characters long.");
    } else {
      setValidationError('');
      registerUser(user);
    }
  };
  
  const handleRegister =(event)=>{
    event.preventDefault();
    validateForm();
  };
        
  return (
    <main>
        <h2>Register page</h2>
        <Form user={user} setUser= {setUser} />
        <button onClick={handleRegister}>Register</button>
        {isValid ? null : <p> {validationError} </p>}
    </main>
  )
}

export default Register