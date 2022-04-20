import { Link } from "react-router-dom";
import "./homeButton.css"
import homeBtn from "../../img/home-btn.png"

export function HomeButton() {
    return ( 
        <div className="homeDiv">
            <Link to="/"  style={{textDecoration: "none"}}><img src={homeBtn} alt="home" className="homeBtn" /></Link>
        </div>
     );
}