import {Link} from 'react-router-dom';

function Erro(){
    return (
        <div>
            <h1>Oops! Página não encontrada.</h1>
            <p>Você está tentando acessar uma página que não existe.</p>
            <Link to="/">Voltar para a Home</Link>  
        </div>
    )
}
export default Erro;