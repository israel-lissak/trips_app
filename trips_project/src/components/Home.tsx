import { Outlet, Link } from "react-router-dom";


function Home() {

  return (
        <>
            <h1>Home</h1>

            <Link to="/">Home  </Link>
    
            <Link to="/allTrips">All trips  </Link>
    
            <Link to="/UserRegistration">Registration  </Link>
    
            <Link to="/UserLogin">Login  </Link>
                    
           
            <Outlet />
        </>
    )
}

export default Home