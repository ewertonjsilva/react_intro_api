import React, { useState } from 'react';
import { MdFastfood, MdMenu } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';

import { logout, isLogged, tipo } from '../services/auth';

import './cabecalho.css'; 

function Cabecalho({pag}) { 

    const [mobile, setMobile] = useState(false); 
    let navigate = useNavigate(); 

    function ativaMenu() {
        if (mobile === false) {
            setMobile(true);
        } else {
            setMobile(false);
        }
    } 

    function sair() {
        logout(); 
        navigate('/');
    }

    return(
        <header>
            {/* Logo e navegação     */}
            <nav className="containerNav">
                <div className="menu">
                    <div className='logoNome'>
                        <MdFastfood className="icon" id="logo" />        
                        <label for="" id="titulo">BomBurguer</label>
                    </div>                      
                    <div className="menuGrande">
                        <Link to='/' className={pag === 'home' ? 'active' : ''}>Home</Link>                  
                        <Link to='/produtos' className={pag === 'produtos' ? 'active' : ''}>Produtos</Link>
                        <Link to='/cadusuarios' className={pag === 'cadUsu' ? 'active' : ''}>Cadastrar</Link>
                        <Link to='/contato' className={pag === 'contato' ? 'active' : ''}>Contato</Link>
                        <Link to='/login' className={pag === 'login' ? 'active' : ''}>Login</Link>  
                        <span className='menuSair' onClick={() => sair()}>Sair</span>                      
                    </div>
                    <div className="menuMobile">
                        <a href="#" onClick={ativaMenu} className="icon" id="mIco">
                            <MdMenu className="icon" id="menu"/>
                        </a>
                    </div>                    
                </div>  
                <div className={mobile === false ? "menuMobileExpandidon" : "menuMobileExpandidos"} id="mostraOpMobile">  
                        <Link to='/' className={pag === 'home' ? 'active' : ''}>Home</Link>                  
                        <Link to='/produtos' className={pag === 'produtos' ? 'active' : ''}>Produtos</Link>
                        <Link to='/cadusuarios' className={pag === 'cadUsu' ? 'active' : ''}>Cadastrar</Link>
                        <Link to='/contato' className={pag === 'contato' ? 'active' : ''}>Contato</Link>
                        <Link to='/login' className={pag === 'login' ? 'active' : ''}>Login</Link>   
                        <span className='menuSair' onClick={() => sair()}>Sair</span>
                </div>               
            </nav>            
        </header>
    );
}

export default Cabecalho;