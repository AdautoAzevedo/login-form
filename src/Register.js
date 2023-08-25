import React from 'react'
import { useNavigate } from 'react-router-dom';

const Register = ({user, setUser}) => {

  const navigate = useNavigate();

  const handleChange =(event) =>{
      const { name, value } = event.target;
      setUser({
        ...user,
        [name]: value
      });
  }

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
        <form>         
          <input 
            type="text" 
            name='userName'
            value={user.userName}
            onChange={handleChange}
          />
          <input 
            type="text" 
            name='password'
            value={user.password}
            onChange={handleChange}
          />
          <button onClick={handleRegister}>Register</button>
        </form>
    </main>
  )
}

export default Register