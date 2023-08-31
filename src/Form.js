import React from 'react'

const Form = ({ user, setUser}) => {
   const handleChange =(event) =>{
      const { name, value } = event.target;
      setUser({
        ...user,
        [name]: value
      });
    };
    
    return (
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
        </form>
  )
}

export default Form