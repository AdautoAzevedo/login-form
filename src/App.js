import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Denied from './Denied';
import Home from './Home';

function App() {
  const [user, setUser] = useState({
    userName: '',
    password: ''
  });

  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element= { <Login user={user} setUser={setUser} /> } />
        <Route path='/register' element = { <Register user={user} setUser={setUser} /> } />
        <Route path='/denied' element = { <Denied/> } />
        <Route path='/home' element = {<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
