import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = async () =>{
    const logoutURL = "http://localhost:3500/logout";
    try {
        const response = await fetch(logoutURL,{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            }, 
        });
        if(!response.ok){
            const message = response.status;
            throw new Error(message);
        }
        console.log("Sucessful logout ");
        navigate("/");
      } catch (error) {
        console.log(error);
    };
  };
  
  return (
    <main>
      <h2>Welcome back!!</h2>
      <button onClick={handleLogout}>Logout</button>
    </main>
  )
}

export default Home