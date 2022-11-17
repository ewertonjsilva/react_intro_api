import React, { useState } from 'react';
import { MdFastfood, MdMenu } from "react-icons/md";
import { Link } from 'react-router-dom';

import './cabecalho.css'; 

function Cabecalho() { 

    const [mobile, setMobile] = useState(false);

    function ativaMenu(e) {
        if (mobile === false) {
            setMobile(true);
        } else {
            setMobile(false);
        }
    }

    return(
        <header>
            {/* Logo e navegação     */}
            <nav className="containerNav">
                <div className="menu">
                    <div>
                        <MdFastfood className="icon" id="logo" />        
                        <label for="" id="titulo">BomBurguer</label>
                    </div>                      
                    <div className="menuGrande">
                        <Link to='/' className="active">Home</Link>                  
                        <Link to='/produtos'>Produtos</Link>
                        <Link to='/cadusuarios'>Cadastrar</Link>
                        <a href="./paginas/contato.html">Contato</a>
                        <a href="./paginas/login.html">Login</a>
                    </div>
                    <div className="menuMobile">
                        <a href="#" onClick={ativaMenu} className="icon" id="mIco">
                            <MdMenu className="icon" id="menu"/>
                        </a>
                    </div>                    
                </div>  
                <div className={mobile === false ? "menuMobileExpandidon" : "menuMobileExpandidos"} id="mostraOpMobile">  
                    <a href="#" className="active">Home</a>                  
                    <a href="./paginas/produtos.html">Produtos</a>
                    <a href="./paginas/cadUsuario.html">Cadastrar</a>
                    <a href="./paginas/contato.html">Contato</a>
                    <a href="./paginas/login.html">Login</a>
                </div>               
            </nav>            
        </header>
    );
}

export default Cabecalho;