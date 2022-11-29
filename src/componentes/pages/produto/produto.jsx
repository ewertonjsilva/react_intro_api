import {useLocation} from 'react-router-dom';

import Cabecalho from "../../header/cabecalho"; 
import Rodape from "../../footer/rodape";

import { MdEco } from "react-icons/md";

import './produto.css'; 

import salada from '../../../imagens/temp/salada.jpg'; 
import carrinho from '../../../imagens/icones/carrinho.svg';

function Produto() { 

    const location = useLocation();

    return(
        <>
            <Cabecalho />

            <div className="container">
                <img className='imgProd' src={location.state.prd_img} alt={"Imagem " + location.state.prd_nome} />
                <div>
                    <div className="titulo">
                        <span id="titulo">{location.state.prd_nome}</span>
                        <MdEco className="icon"/>                    
                    </div>
                    <span className="descricao">{location.state.prd_descricao}</span>
                    <span id="valor">{'R$ ' + location.state.prd_valor}</span>
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