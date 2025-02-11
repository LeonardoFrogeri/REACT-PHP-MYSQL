import {Link} from 'react-router-dom';

function Contato(){
    return(
        <div>
            <h1>Welcome to my website!</h1>
            <p>This is the Contato page.</p>
            <Link to="/">Home</Link>
            <br/>
            <Link to="/Sobre">Sobre</Link>
            <br/>
            <Link to="/Contato">Contato</Link>
        </div>
    );
}

export default Contato;