import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

function UserLogin() {

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
    
    fetch("http://localhost:3000/api/auth/login", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        localStorage.setItem("token", result.responseObj.token)
      })
      .catch(error => console.log('error', error));

    
  }

  return (
    <>
        <h1>User login</h1>
        <Link to="/">Home  </Link>
        <Outlet/>

      
        <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>

          <label>Email:
            <input 
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="enter your email"
            />
          </label>

          <label>Password:
            <input 
                type="text"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="enter your password"
            />
          </label>
          <button>login</button>

        </form>


    </>

    
  )
}

export default UserLogin