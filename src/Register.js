import React from 'react'
import { useNavigate } from 'react-router-dom';
import Form from './Form';

const Register = ({user, setUser}) => {

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
  
  const handleRegister =(event)=>{
    event.preventDefault();
    registerUser(user);
  };
        
  return (
    <main>
        <h2>Register page</h2>
        <Form user={user} setUser= {setUser} />
        <button onClick={handleRegister}>Register</button>
    </main>
  )
}

export default Register