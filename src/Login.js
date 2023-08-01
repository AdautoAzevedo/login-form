import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Login = ( {user, setUser} ) => {
    const navigate = useNavigate();
    
    const handleChange =(event) =>{
        const { name, value } = event.target;
        setUser({
          ...user,
          [name]: value
        });
      }

    const sendLoginRequest = async ()  =>{
      const authURL = "http://localhost:3500/auth";
        try {
            const response = await fetch(authURL,{
                method: "POST",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify(user)
            });
            if(!response.ok){
                navigate("/denied");
                const message = response.status;
                throw new Error(message);
            }
            const data = await response.json();
            console.log(data);
            navigate("/home");
        } catch (error) {
            console.log(error);
        }
    };
    
      const handleLogin = (event) =>{
        event.preventDefault();
        sendLoginRequest(user);
      }
      
  return (
    <main>
        <h2>Login Page</h2>
        <form>         
          <input 
            type="text" 
            name='userName'
            value={user.userName}
            onChange={handleChange}
          />
          <input 
            type="password" 
            name='password'
            value={user.password}
            onChange={handleChange}
          />
          <button onClick={handleLogin}>Login</button>
        </form>
        
        <Link to={"/register"} className='link' >Click here to register</Link>
    </main>
  )
}

export default Login