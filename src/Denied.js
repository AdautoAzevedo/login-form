import React from 'react'
import { Link } from 'react-router-dom'
const Denied = () => {
  return (
    <main>
        <h2>User not found, please register:</h2>
        <Link to={"/register"} className='link'>Click here to register</Link>
        <h2>Or go back to the Login page</h2>
        <Link to={"/"} className='link'>Login page</Link>
    </main>
  )
}

export default Denied