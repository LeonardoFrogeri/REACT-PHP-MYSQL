
import { Link } from "react-router-dom";
import './style.css';
function Header(){
    return (
        <header>
           <div className="Links">
            <Link className="lilinks" to="/Home/89898989">Home</Link>
            <Link className="lilinks" to="/Sobre">About</Link>
            <Link className="lilinks" to="/Contato">Contact</Link>
           </div>
        </header>
    );
}

export default Header;