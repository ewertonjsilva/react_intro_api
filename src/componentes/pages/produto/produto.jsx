import Cabecalho from "../../header/cabecalho"; 
import Rodape from "../../footer/rodape";

import { MdEco } from "react-icons/md";

import './produto.css'; 

import salada from '../../../imagens/temp/salada.jpg'; 
import carrinho from '../../../imagens/icones/carrinho.svg';

function Produto() {
    return(
        <>
            <Cabecalho />

            <div className="container">
                <img src={salada} alt="salada" />
                <div>
                    <div className="titulo">
                        <span id="titulo">Nome do produto</span>
                        <MdEco className="icon"/>                    
                    </div>
                    <span className="descricao">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat fugit quas, optio consequuntur inventore in esse cumque totam delectus enim cum recusandae laboriosam error nesciunt molestias? Accusantium voluptatem quia voluptates.</span>
                    <span id="valor">R$ 99,99</span>
                    <div className="comprar">
                        <span>Quantidade</span>
                        <input type="number" placeholder="1" />
                        <span>Valor R$ 99,99</span>
                        <button>
                            <p>Inserir no carrinho</p> 
                            <img src={carrinho} alt="adicionar" />
                        </button>
                    </div>
                </div>
            </div>            

            <Rodape />        
        </>
    );
}

export default Produto;