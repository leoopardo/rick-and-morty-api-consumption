import {useState, useEffect} from 'react';
import axios from 'axios';

export function Episodes() {
    
    const [episode, setEpisode] = useState([]);
    
    useEffect(()=>{

        async function fetchEpisode() {
            const response = await axios.get('https://rickandmortyapi.com/api/episode')
            setEpisode(response.data.results)
        }
        fetchEpisode()
        console.log(episode)
    },[])
    
    return ( 
        <h1>Episode</h1>
    );
}

