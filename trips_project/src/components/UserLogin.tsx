import { Outlet, Link } from "react-router-dom";

function UserLogin() {
  return (
    <>
        <h1>UserLogin</h1>
        <Link to="/">Home  </Link>
        <Outlet/>
    </>

    
  )
}

export default UserLogin