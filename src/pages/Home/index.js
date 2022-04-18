import {Link} from 'react-router-dom'

export function Home() {
    return ( 
        <ul>
            <Link to="/characters"><li>Characters</li></Link>
            <Link to="/locations"><li>Location</li></Link>
            <Link to="/episodes"><li>Episodes</li></Link>
        </ul>
    );
}