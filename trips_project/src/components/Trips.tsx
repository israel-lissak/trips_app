import { Outlet, Link } from "react-router-dom";
import {useState, useEffect} from 'react'

interface Trip{
    name: string;
    destination: string;
    startDate: string;
    endDate: string;
    description: string;
    price: number;
    image: string;
    activities: string[];
    id:string;
}


async function getTrips() {
    const data = await fetch('http://localhost:3000/api/trips')
    const trips = await data.json()
    return trips
}

function Trips() {

    const [trips, setTrips] = useState<Trip[]>([]);
    const [status, setStatus] = useState<boolean>(false);

    useEffect(() => {
        getTrips().then((res) => {
            setTrips(res)
        })
    },[status])    


const myHeaders = new Headers();
myHeaders.append("authorization", "test-token");


const requestOptions:RequestInit = {
  method: 'DELETE',
  headers: myHeaders,
  redirect: 'follow'
};



    function deleteTrip(id:string) {
        fetch(`http://localhost:3000/api/trips/${id}`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
        setStatus(true)
    }
 

  return (
    <>
        <h1>Trips</h1>
        <Link to="/">Home </Link>
        <Link to="/NewTripForm">New trip </Link>
        <Outlet/>

        <div id="cards">
            {trips.map((trip) => (
                <div className="tripcard" key={trip.id}>
                    <h2>{trip.name}</h2>
                    <img src={trip.image}/>
                    <button onClick={() => deleteTrip(trip.id)}>delete trip</button>
                    <Link to={`/tripDetails/${trip.id}`}>trip details</Link>
                    <Link to={`/tripUpdate/${trip.id}`}>update trip</Link>
                </div>
                
            ))}
        </div>


    </>

    
  )
}

export default Trips
