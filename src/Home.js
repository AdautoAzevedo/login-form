import {  useNavigate } from 'react-router-dom';
import { useAuth } from './context/AuthProvider';

const Home = () => {
    const navigate = useNavigate();

    const {auth, setToken} = useAuth();
    
    const handleLogout = async () =>{
      const logoutURL = "http://localhost:3500/logout";
      try {
          const response = await fetch(logoutURL,{
              method:"POST",
              headers:{
                  "Content-type":"application/json"
              },
          });

          if (!response.ok){
              const message = response.status;
              throw new Error(message);
          }

          console.log("Sucessful logout ");
          navigate("/");
        } catch (error) {
          console.log(error);
      };
    };

    //Test function to test token management
    const getUsers = async () =>{
      const baseURL = "http://localhost:3500/api";
      try {
        console.log(auth);
        const response = await fetch(baseURL,{
          method: "GET",
          headers:{
            "Authorization": `Bearer ${auth}`,
            "Content-Type": "application/json",
          }
        });
         
        if (!response.ok){
          getNewToken();  
        }

        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    //Here we can get a new accessToken when the old one has expired
    const getNewToken = async () =>{
      const refreshURL = "http://localhost:3500/refresh";
      
      try {
        const response = await fetch(refreshURL, {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          credentials: 'include'
        });
        
         if (!response.ok){
          const message = response.status;
          throw new Error(message);
        } 
        
        //We receive the new token and store it in the auth variable
        const data = await response.json();
        setToken(data.accessToken);

      } catch (error) {
        console.log(error);
      }
    }
    
    return (
      <main>
        <h2>Welcome back!!</h2>
        <button onClick={getUsers}>Get users</button>
        <button onClick={handleLogout}>Logout</button>
      </main>
    )
  }

  export default Home