import './rodape.css'; 

import Face from '../../imagens/icones/facebook.svg';
import Tel from '../../imagens/icones/telegram.svg';
import What from '../../imagens/icones/whatsapp.svg';
import Tik from '../../imagens/icones/tiktok.svg';

function Rodape() {
    return(
        <footer className="rodape">            
            <div className="social">
                <img src={Face} alt="facebook" />
                <img src={Tel} alt="" />
                <img src={What} alt="" />
                <img src={Tik} alt="" />
            </div>
            <p>Lanches BomNurguer de Cidade ME | 00.000.000/0000-00</p>
            <p>Rua Brasil, 1000 - centro - Parapuã/SP | bbgr@bbuguer.com</p>
        </footer>
    );
}

export default Rodape;