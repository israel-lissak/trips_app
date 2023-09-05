import { Outlet, Link } from "react-router-dom";

function UserRegistration() {
  return (
    <>
        <h1>UserRegistration</h1>
        <Link to="/">Home  </Link>
        <Outlet/>
    </>
  )
}

export default UserRegistration