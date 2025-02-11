import { useParams } from "react-router-dom";



function Produto()
{
    const {id} = useParams();
    return(
        <div>
            <h1>Nome do Produto</h1>
            <p>Descrição do Produto: {id}</p>
            <p>Preço: R$ 100,00</p>
            <button>Adicionar ao Carrinho</button>
        </div>
    )
}

export default Produto;