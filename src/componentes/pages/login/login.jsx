import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { MdLogin } from "react-icons/md";

import Cabecalho from "../../header/cabecalho"; 
import Rodape from "../../footer/rodape"; 

import api from '../../services/api'; 

import './login.css';

function LoginUsu() {

    let navigate = useNavigate(); 
    // const [objLogado, setObjLogado] = useState({});
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');


    function handleSubmit(event) { 
        event.preventDefault();
        logar();        
    }

    // AJUSTANDO FUNÇÃO

    async function logar(event) {         

        try {
            const dados = {
                login, 
                senha
            }
            const response = await api.post('/usuarios/login', dados); 

            if (response.data.confirma == true) {
                const objLogado = {
                    "id": response.data.id, 
                    "nome": response.data.nome, 
                    "acesso": response.data.tipo 
                };
                // signin(JSON.stringify(objLogado));                
                localStorage.clear();
                localStorage.setItem('user', JSON.stringify(objLogado));
                // window.location.reload(true); 
                navigate('/'); // direcionar de acordo com a situação

                /*
                    https://www.freecodecamp.org/portuguese/news/como-persistir-um-usuario-conectado-com-react/
                    RECUPERAR INFO USUÁRIO LOGADO
                    const user = JSON.parse(localStorage.getItem('user'));
                    alert(user.id);
                */
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
                <form id="form" class="form" onSubmit={handleSubmit}>      
                    <input
                        type="text"
                        id="email"
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
                    <button type="submit" className='botao'><MdLogin className='ico' /> Entrar</button>
                </form>
            </div>

            <Rodape />        
        </>
    );
}

export default LoginUsu;