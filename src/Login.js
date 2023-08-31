import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './context/AuthProvider';
import Form from './Form';

const Login = ( {user, setUser} ) => {
  const navigate = useNavigate();

  const { setToken } = useAuth();

  const sendLoginRequest = async ()  =>{
    const authURL = "http://localhost:3500/auth";
      try {
          const response = await fetch(authURL,{
              method: "POST",
              headers:{"Content-type":"application/json"},
              credentials: 'include',
              body:JSON.stringify(user)
          });

          if (!response.ok){
            navigate("/denied");
            const message = response.status;
            throw new Error(message);
          }

          const data = await response.json();
          const token = data.accessToken;
          setToken(token);
          navigate("/home");  
        } catch (error) {
          console.log(error);
      }
  };

  const handleLogin = (event) =>{
    event.preventDefault();
    sendLoginRequest(user);
  };  

  return (
    <main>
        <h2>Login Page</h2>
        <Form user= {user} setUser= {setUser} />
        <button onClick={handleLogin}>Login</button>
        <Link to={"/register"} className='link' >Click here to register</Link>
    </main>
  )
}

export default Login