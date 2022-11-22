import { MdSearch, MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";

import Cabecalho from "../../header/cabecalho"; 
import Rodape from "../../footer/rodape";

import './produtos.css';

import prod1 from '../../../imagens/temp/hamburger-bacon.jpg';
import prod2 from '../../../imagens/temp/hamburger-batata.jpg';
import prod3 from '../../../imagens/temp/lanche1.jpg';
import prod4 from '../../../imagens/temp/suco2.jpg';
import prod5 from '../../../imagens/temp/suco-laranja.jpg';
import prod6 from '../../../imagens/temp/sorvete.jpg'; 
import prod7 from '../../../imagens/temp/lanche2.jpg'; 
import prod8 from '../../../imagens/temp/macarrao.jpg'; 
import prod9 from '../../../imagens/temp/salada.jpg'; 

function Produtos() {
    return(
        <>  
            <Cabecalho pag={'produtos'} />

            <div className="menuPesquisa">
                <div className="opPesquisa">
                    <select name="tipoProd" id="tipo">
                        <option selected value="0">-</option>
                        <option value="1">Lanche</option>
                        <option value="2">Bebida</option>
                        <option value="3">Porção</option>
                        <option value="3">Sobremesa</option>
                    </select>
                </div>
                <div className="valorPesquisa">
                    <input type="text" />
                    <MdSearch className="icon" />
                </div>
            </div>

            <div className="produtos">
                {/* Alguns produtos */}
                <div className="cardProd">
                    <img src={prod1} alt="" />
                    <span className="descricao">Lanche</span>
                    <span>R$ 0,00</span>
                </div>
                <div className="cardProd">
                    <img src={prod2} alt="" />
                    <span className="descricao">Lanche</span>
                    <span>R$ 0,00</span>
                </div>
                <div className="cardProd">
                    <img src={prod3} alt="" />
                    <span className="descricao">Lanche</span>
                    <span>R$ 0,00</span>
                </div>
                <div className="cardProd">
                    <img src={prod4} alt="" />
                    <span className="descricao">Lanche</span>
                    <span>R$ 0,00</span>
                </div>
                <div className="cardProd">
                    <img src={prod5} alt="" />
                    <span className="descricao">Lanche</span>
                    <span>R$ 0,00</span>
                </div>
                <div className="cardProd">
                    <img src={prod6} alt="" />
                    <span className="descricao">Lanche</span>
                    <span>R$ 0,00</span>
                </div>
                <div className="cardProd">
                    <img src={prod7} alt="" />
                    <span className="descricao">Lanche</span>
                    <span>R$ 0,00</span>
                </div>
                <div className="cardProd">
                    <img src={prod8} alt="" />
                    <span className="descricao">Lanche</span>
                    <span>R$ 0,00</span>
                </div>
                <div className="cardProd">
                    <img src={prod9} alt="" />
                    <span className="descricao">Lanche</span>
                    <span>R$ 0,00</span>
                </div>
            </div>

            <div className="paginacao">
                <MdOutlineArrowBackIosNew className="pags" />                
                <p>Página 1 de 5</p>
                <MdOutlineArrowForwardIos className="pags" />
            </div>

            <Rodape />
        </>
    );
}

export default Produtos;