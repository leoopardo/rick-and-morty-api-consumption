import {Link} from 'react-router-dom'

export function Card (props){

    return (
        <>
        <div className="card mb-3" style={{maxWidth: "540px"}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={props.character.image} className="img-fluid rounded-start" alt={props.character.name}/>
                </div>
            <div className="col-md-8">
        <div className="card-body">
        <h5 className="card-title">{props.character.name}</h5>
        <p className="card-text">{`Este personagem é da espécie: ${props.character.species}`}</p>
        <Link to={`/character/${props.character.id}`}></Link>
        </div>
    </div>
    </div>
    </div>
    </>
    );
}