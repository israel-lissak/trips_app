import { Outlet, Link, useParams} from "react-router-dom";
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


async function getTrip(id: string |undefined) {
    const data = await fetch(`http://localhost:3000/api/trips/${id}`)
    const trip = await data.json()
    return trip
}



function TripDetail() {

    const {id} = useParams()

    const [trip, setTrip] = useState<Trip>();

    useEffect(() => {
        getTrip(id).then((res) => {
            setTrip(res)
        })
    },[])

  return (

        <>
            <h1>Trip detail</h1>
            <Link to="/">Home </Link>
            <Link to="/allTrips">All trips  </Link>
            <Outlet/>

            <div className="tripDetailCard" key={trip?.id}>
                    <h2>{trip?.name}</h2>
                    <img src={trip?.image}/>
                    <p>{trip?.description}</p>
                    <p>{trip?.activities}</p>
                    <p>{trip?.price}</p>
            </div>
        </>

  )
}

export default TripDetail