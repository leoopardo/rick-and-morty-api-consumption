import {useState, useEffect} from 'react';
import axios from 'axios';
import {Card} from '../../components/Card'

export function Characters() {
    
    const [characters, setCharacters] = useState([]);
    
    useEffect(()=>{

        async function fetchCharacters() {
            const response = await axios.get('https://rickandmortyapi.com/api/character')
            setCharacters(response.data.results)
        }
        fetchCharacters()
        
    },[])
    console.log(characters)
    return ( 
        <>
        <h1>Characters</h1>

        {
            characters.map((currentCharacter)=>{
                return (
                    <Card character={currentCharacter}/>
                );
            })
        }
        </>
    );
}

