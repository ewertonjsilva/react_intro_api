import { Link, useNavigate } from 'react-router-dom';

import { MdLogin } from "react-icons/md";

import Cabecalho from "../../header/cabecalho"; 
import Rodape from "../../footer/rodape"; 

import api from '../../services/api'; 
import { login as signin } from '../../services/auth';

import './login.css';

function Login() {

    let navigate = useNavigate(); 

    // AJUSTANDO FUNÇÃO

    // async function login(login, senha) { 
    //     const dados = {
    //         login, 
    //         senha
    //     }

    //     try {
    //         const response = await api.post('/usuarios/login', dados); 
    //         //const objLogado = { 
    //         setObjLogado({
    //             "id": response.data.idLog, 
    //             "nome": response.data.nomeLog, 
    //             "acesso": response.data.nivelAcesso, 
    //             tipo,
    //             "token": 'ABCD'
    //         });
    //         // signin(JSON.stringify(objLogado)); // ver como passar vários valores em vídeo do dev samurai    
    //         setId(response.data.idLog); 
    //         setCompletar(response.data.compCad); 
    //         setPoliticas(response.data.pol); 
    //         setTermos(response.data.ter); 
    //         setTela(2); // direcionar de acordo com a situação
    //     } catch (error) { 
    //         if (error.response) {
    //             alert(error.response.data.message);
    //         } else {
    //             alert(error);
    //         }  
    //         //setTela(0);
    //         //setEtapaLog(0);
    //     }        
    // } 


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