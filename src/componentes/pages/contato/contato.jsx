import Cabecalho from "../../header/cabecalho"; 
import Rodape from "../../footer/rodape";

import './contato.css'; 

import construcao from '../../../imagens/emconstrucao.svg';

function Contato() {
    return(
        <>
            <Cabecalho pag={'contato'} />

            <div className="containerContato">
                <img src={construcao} alt="Página em construção" className="imgCons" />
                <h3>Página em construção</h3> 
                <p className="mensagemCons">Estamos trabalhando nesta página, tente novamente em breve.</p>
            </div>            

            <Rodape />        
        </>
    );
}

export default Contato;