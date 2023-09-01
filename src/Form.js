import React, { useState } from 'react'

const Form = ({ user, setUser}) => {
  

  const handleChange = (event) =>{
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value  
    });
  };
    
  return (
    <form>
      <label htmlFor="userName">User:</label>        
      <input 
      type="text" 
      name='userName'
      value={user.userName}
      onChange={handleChange}
      />
      <label htmlFor="password">Password:</label>
      <input 
      type="password" 
      name='password'
      value={user.password}
      onChange={handleChange}
      />
    </form>
  )
}

export default Form