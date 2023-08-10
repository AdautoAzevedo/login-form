import { useLocation, useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    //This will get the passed values
    const location = useLocation();
    const auth = location.state.token;
    
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
        const response = await fetch(baseURL,{
          method: "GET",
          headers:{
            "Authorization": `Bearer ${auth}`,
            "Content-Type": "application/json",
          }
        }); 
        if (!response.ok){
          navigate("/denied");
          const message = response.status;
          throw new Error(message);
        }

        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
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