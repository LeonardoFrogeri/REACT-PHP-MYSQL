import {Link} from 'react-router-dom'
import { useState } from "react";


function Home(){
    const [pedido, setpedido] = useState(0);
        return(
        <div>
            <h1>Welcome to my website!</h1>
            <p>This is the Home page.</p>
            
            <input type="number" value={pedido} onChange={(e) => setpedido(e.target.value)}/>
            <Link to="/Sobre">Sobre</Link>
            <br/>
            <Link to="/Contato">Contato</Link>
            <br/>
            <Link to={`/Produto/${pedido}`}>Produto {pedido}</Link>
        </div>

    );
}

export default Home;