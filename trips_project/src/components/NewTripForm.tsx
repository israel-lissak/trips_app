import { useState } from "react";
import { Outlet, Link } from "react-router-dom";


function NewTripForm() {
  
  const [name, setName] = useState('')
  const [destination, setDestination] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')
  const [activity, setActivity] = useState('')
  
 
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const obj = {name, destination, startDate, endDate, description, price, image, activity: activity.split(',')}

    console.log(obj);

    const myHeaders = new Headers();
    myHeaders.append("authorization", "test-token");
    myHeaders.append("Content-Type", "application/json");

    const requestOptions:RequestInit = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(obj),
      redirect: 'follow'
    };
    
    fetch("http://localhost:3000/api/trips", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    
  }
  


  return (

    <>
        <h1>New Trip</h1>
        <Link to="/">Home </Link>
        <Outlet/>

        <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>

          <label>name:
            <input 
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)} 
                placeholder="enter trip name"
            />
          </label>

          <label>destination:
            <input 
                type="text"
                required
                value={destination}
                onChange={(e) => setDestination(e.target.value)} 
                placeholder="enter destination"
            />
          </label>
          
          <label>start date:
            <input 
                  type="text"
                  required
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)} 
                  placeholder="enter start date"
              />
          </label>

          <label>end date:
            <input 
                  type="text"
                  required
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)} 
                  placeholder="enter end date"
              />
          </label>
          
          <label>description:
            <input 
                  type="text"
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)} 
                  placeholder="enter description"
              />
          </label>
          
          <label>price:
            <input 
                  type="number"
                  required
                  value={price}
                  onChange={(e) => setPrice(e.target.value)} 
                  placeholder="enter price"
              />
          </label>
          
          <label>image url:
            <input 
                  type="text"
                  required
                  value={image}
                  onChange={(e) => setImage(e.target.value)} 
                  placeholder="enter image url"
              />
          </label>

          <label>activity:
            <input 
                  type="text"
                  required
                  value={activity}
                  onChange={(e) => setActivity(e.target.value)} 
                  placeholder="enter activities devided by ','"
              />
          </label>
          
          
          <button>submit</button>

        </form>

      
      
      </>
    )
  }

  export default NewTripForm