import React, { useState, useEffect } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { MdLogin } from "react-icons/md";

import Cabecalho from "../../header/cabecalho"; 
import Rodape from "../../footer/rodape"; 

import api from '../../services/api'; 
import { login as signin } from '../../services/auth';

import './login.css';

function LoginUsu() {

    let navigate = useNavigate(); 
    const [objLogado, setObjLogado] = useState({});
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

    // AJUSTANDO FUNÇÃO

    async function logar() { 
        const dados = {
            login, 
            senha
        }

        try {
            const response = await api.post('/usuarios/login', dados); 
            //const objLogado = { 
            setObjLogado({
                "id": response.data.id, 
                "nome": response.data.nome, 
                "acesso": response.data.tipo 
            });   
            alert(response.data);
            if (response.data.confirma == true) {
                signin(JSON.stringify(objLogado));
                // window.location.reload(true); 
                navigate('/'); // direcionar de acordo com a situação
            } else {
                alert('Erro: ' + response.data.message)
            }
            
        } catch (error) { 
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert(error);
            }  
        }        
    } 

    return(
        <>
            <Cabecalho pag={'login'} />

            <div class="containerLog">
                <div>
                    <h2>Acessar o site</h2>
                </div>
                <form id="form" class="form">      
                    <input
                        type="password"
                        id="password"
                        placeholder="E-mail" 
                        onChange={v => setLogin(v.target.value)} 
                        value={login}                        
                    />     
                    <input
                        type="password"
                        id="password"
                        placeholder="Senha" 
                        onChange={v => setSenha(v.target.value)} 
                        value={senha}
                    />           
                    <div class="info">
                        <Link to='/cadusuarios'>Não tenho cadastro!</Link>
                        <a href="#">Esqueci o e-mail</a>
                    </div>
                    <button type="submit" className='botao' onClick={() => logar()}><MdLogin className='ico' /> Entrar</button>
                </form>
            </div>

            <Rodape />        
        </>
    );
}

export default LoginUsu;