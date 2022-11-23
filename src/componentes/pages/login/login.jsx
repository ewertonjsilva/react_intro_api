import { Link, useNavigate } from 'react-router-dom';

import { MdLogin } from "react-icons/md";

import Cabecalho from "../../header/cabecalho"; 
import Rodape from "../../footer/rodape"; 

import './login.css';

function Login() {

    let navigate = useNavigate(); 

    function Logar() {
        navigate('/');
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
                    />     
                    <input
                        type="password"
                        id="password"
                        placeholder="Senha"
                    />           
                    <div class="info">
                        <Link to='/cadusuarios'>Não tenho cadastro!</Link>
                        <a href="#">Esqueci o e-mail</a>
                    </div>
                    <button type="submit" className='botao' onClick={() => Logar()}><MdLogin className='ico' /> Entrar</button>
                </form>
            </div>

            <Rodape />        
        </>
    );
}

export default Login;