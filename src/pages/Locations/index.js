import {useState, useEffect} from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css"; 

export function Locations() {
    
    const [location, setLocation] = useState([]);
    
    useEffect(()=>{

        async function fetchLocation() {
            const response = await axios.get('https://rickandmortyapi.com/api/location')
            setLocation(response.data.results)
        }
        fetchLocation()
        console.log(location)
    },[])
    
    return ( 
        <h1>Location</h1>
    );
}

