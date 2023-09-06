import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

function UserRegistration() {

  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const obj = {email, password}

    console.log(obj);

    const token = localStorage.getItem('token');

    const myHeaders = new Headers();
    myHeaders.append("authorization", token!);
    myHeaders.append("Content-Type", "application/json");

    const requestOptions:RequestInit = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(obj),
      redirect: 'follow'
    };
    
    fetch("http://localhost:3000/api/auth/register", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  return (
    <>
        <h1>User registration</h1>
        <Link to="/">Home  </Link>
        <Outlet/>


        <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>

          <label>Email:
            <input 
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="enter email"
            />
          </label>

          <label>Password:
            <input 
                type="text"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="enter password"
            />
          </label>
          

          
          
          <button>register</button>

        </form>
    </>
  )
}

export default UserRegistration