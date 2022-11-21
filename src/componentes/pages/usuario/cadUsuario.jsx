import React, { useState } from 'react';
import { MdCheckCircle, MdError } from "react-icons/md";

import Cabecalho from "../../header/cabecalho"; 
import Rodape from "../../footer/rodape";

import IconCad from '../../../imagens/icones/cadastrar.svg';

import './cadUsuario.css';

function CadUsuario() { 

    // info
    const [usu_nome, setUsu_nome] = useState(''); 
    const [usu_email, setUsu_email] = useState(''); 
    const [cid_id, setCid_id] = useState('0'); 
    const [end_logradouro, setEnd_logradouro] = useState(''); 
    const [end_num, setEnd_Num] = useState(''); 
    const [end_bairro, setEnd_Bairro] = useState(''); 
    const [end_complemento, setEnd_Complemento] = useState(''); 
    const [cli_cel, setCli_cel] = useState(''); 
    const [usu_senha, setUsu_senha] = useState(''); 
    
    const usu_tipo = 2;

    // não registra no banco
    const [uf, setUf] = useState('');
    const [confSenha, setConfSenha] = useState(''); 

    // validações
    const [valNome, setValNome] = useState('form-control');
    const [errNome, setErrNome] = useState(''); 
    const [valEmail, setValEmail] = useState('form-control');
    const [errEmail, setErrEmail] = useState(''); 
    const [valUf, setValUf] = useState('form-control');
    const [valCidade, setValCidade] = useState('form-control');
    const [valLogradouro, setValLogradouro] = useState('form-control');
    const [errLogradouro, setErrLogradouro] = useState(''); 
    const [valNum, setValNum] = useState('form-control'); 
    const [valBairro, setValBairro] = useState('form-control');
    const [errBairro, setErrBairro] = useState(''); 
    const [valCel, setValCel] = useState('form-control'); 
    const [errCel, setErrCel] = useState(''); 
    const [valSenha, setValSenha] = useState('form-control');
    const [errSenha, setErrSenha] = useState(''); 
    const [valConfSenha, setValConfSenha] = useState('form-control');
    const [errConfSenha, setErrConfSenha] = useState('');

    function handleSubmit(event) { 
        valida();
        event.preventDefault();
    }

    function valida() {
        let validado = true;

        if (usu_nome === '') {
            setValNome('form-control error'); 
            setErrNome('O nome do usuário é obrigatório');
            validado = false;
        } else if (usu_nome.length < 5) {
            setValNome('form-control error'); 
            setErrNome('Insira o nome completo do usuário');
            validado = false;            
        } else {
            setValNome('form-control success')
        }

        if (usu_email === "") {
            setValEmail('form-control error');
            setErrEmail('O e-mail do usuário é obrigatório');
            validado = false; 
        } else if (!checkEmail(usu_email)) {
            setValEmail('form-control error');
            setErrEmail('Insira um e-mail válido');
            validado = false; 
        } else {
            setValEmail('form-control success');
        }

        if (uf === '') {
            setValUf('form-control error');
            validado = false;
        } else {
            setValUf('form-control success');  
        }

        if (cid_id === '0') {
            setValCidade('form-control error');
            validado = false;
        } else {
            setValCidade('form-control success');  
        }


        if (end_logradouro === '') {
            setValLogradouro('form-control error'); 
            setErrLogradouro('A identifivação do endereço é obrigatória');
            validado = false;
        } else if (end_logradouro.length < 5) {
            setValLogradouro('form-control error'); 
            setErrLogradouro('Insira o endereço completo');
            validado = false;
        } else {
            setValLogradouro('form-control success')
        }

        if (end_num === "") {
            setValNum('form-control error'); 
            validado = false;
        } else {
            setValNum('form-control success');            
        }

        if (end_bairro === '') {
            setValBairro('form-control error'); 
            setErrBairro('É necessário inserir o nome do bairro');
            validado = false;
        } else if (end_bairro.length < 4) {
            setValBairro('form-control error'); 
            setErrBairro('Insira o nome completo do bairro');
            validado = false;
        } else {
            setValBairro('form-control success')
        }

        if (cli_cel === '') {
            setValCel('form-control error'); 
            setErrCel('O nº do celular é obrigatório');
            validado = false;
        } else if (cli_cel.length < 11) {
            setValCel('form-control error'); 
            setErrCel('O número do celular deve ter pelo menos 11 dígitos');
            validado = false;            
        } else {
            setValCel('form-control success')
        }

        if (usu_senha === '') {
            setValSenha('form-control error'); 
            setErrSenha('O preenchimento da senha é obrigatório');
            validado = false;
        } else if (usu_senha.length < 3) {
            setValSenha('form-control error'); 
            setErrSenha('A senha deve ter pelo menos 3 caracteres');
            validado = false;            
        } else {
            setValSenha('form-control success')
        }

        if (confSenha === '') {
            setValConfSenha('form-control error'); 
            setErrConfSenha('A confirmação da senha é obrigatória');
            validado = false;
        } else if (confSenha !== usu_senha) {
            setValConfSenha('form-control error'); 
            setErrConfSenha('A senha e a confirmação devem ser iguais');
            validado = false;            
        } else {
            setValConfSenha('form-control success')
        }        

        // if (validado === 10) {
        //     console.log("O formulário está 100% válido!");
        // }
    }

    function checkEmail(email) {
        return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            email
        );
    }

    return(
        <>
            <Cabecalho /> 

            <div className="container">            
                <div>
                    <h2>Criar uma conta</h2>
                </div>
                <form id="form" className="form" onSubmit={handleSubmit}>
                    <div className={valNome} id="valNome">
                        <label for="username">Nome de usuário</label>
                        <div className="divInput">
                            <input
                                type="text"
                                id="username"
                                placeholder="Digite seu nome de usuário..." 
                                onChange={v => setUsu_nome(v.target.value)} 
                                value={usu_nome}
                            />
                            <MdCheckCircle className="sucesso" />
                            <MdError className="erro" />
                        </div>                    
                        <small id="nome">{errNome}</small>
                    </div>
            
                    <div className={valEmail} id="valEmail">
                    <label for="email">Email</label>
                    <div className="divInput">
                        <input 
                            type="text" 
                            id="email" 
                            placeholder="Digite seu email.." 
                            onChange={v => setUsu_email(v.target.value)} 
                            value={usu_email}
                        />
                        <MdCheckCircle className="sucesso" />
                        <MdError className="erro"/>
                    </div>                  
                    <small>{errEmail}</small>
                    </div>
            
                    <div className="doisItens">
                        <div className={valUf} id="valEstado">
                            <label for="estado">Estado</label>
                            <div className="divInput">
                                <select name="selUf" id="estado" onChange={e => setUf(e.target.value)} value={uf}>
                                    <option selected disabled value="">Sel. estado</option>
                                    <option value="SP">SP</option>
                                    <option value="RJ">RJ</option>
                                    <option value="PR">PR</option>
                                </select>
                                <MdCheckCircle className="sucesso" />
                                <MdError className="erro"/>
                            </div>                  
                            <small>Campo obrigatório!</small>
                        </div>

                        <div className={valCidade} id="valCidade">
                            <label for="cidade">Cidade</label>
                            <div className="divInput">
                                <select name="selCidade" id="cidade" onChange={e => setCid_id(e.target.value)} value={cid_id}>
                                    <option selected disabled value="0" >Selecione a cidade</option>
                                    <option value="1">Tupã</option>
                                    <option value="2">Parapuã</option>
                                    <option value="3">Marília</option>
                                </select>
                                <MdCheckCircle className="sucesso" />
                                <MdError className="erro"/>
                            </div>                  
                            <small>Selecione a cidade!</small>
                        </div>
                    </div>

                    <div className={valLogradouro} id="valLog">
                        <label for="logradouro">Logradouro</label>
                        <div className="divInput">
                            <input
                                type="text"
                                id="logradouro"
                                placeholder="Digite o endereço..." 
                                onChange={v => setEnd_logradouro(v.target.value)} 
                                value={end_logradouro}
                            />
                            <MdCheckCircle className="sucesso" />
                            <MdError className="erro"/>
                        </div>                    
                        <small>{errLogradouro}</small>
                    </div>

                    <div className="doisItens">
                        <div className={valNum} id="valNum">
                            <label for="num">Número</label>
                            <div className="divInput">
                                <input
                                    type="text"
                                    id="num"
                                    placeholder="nº do endereço" 
                                    onChange={v => setEnd_Num(v.target.value)} 
                                    value={end_num}
                                />
                                <MdCheckCircle className="sucesso" />
                                <MdError className="erro"/>
                            </div>                  
                            <small>Campo obrigatório!</small>
                        </div>

                        <div className={valBairro} id="valBairro">
                            <label for="bairro">Bairro</label>
                            <div className="divInput">
                                <input
                                    type="text"
                                    id="bairro"
                                    placeholder="Insira o nome do bairro" 
                                    onChange={v => setEnd_Bairro(v.target.value)} 
                                    value={end_bairro}
                                />
                                <MdCheckCircle className="sucesso" />
                                <MdError className="erro"/>
                            </div>                  
                            <small>{errBairro}</small>
                        </div>
                    </div>

                    <div className="doisItens">
                        <div className="form-control" id="valComp">
                            <label for="comp">Complemento</label>
                            <div className="divInput">
                                <input
                                    type="text"
                                    id="comp"
                                    placeholder="Complemento do endereço" 
                                    onChange={v => setEnd_Complemento(v.target.value)} 
                                    value={end_complemento}
                                />
                                <MdCheckCircle className="sucesso" />
                                <MdError className="erro"/>
                            </div>                  
                            <small>-</small>
                        </div>

                        <div className={valCel} id="valCelular">
                            <label for="celular">nº celular</label>
                            <div className="divInput">
                                <input
                                    type="text"
                                    id="celular"
                                    placeholder="Insira o nº do celular" 
                                    onChange={v => setCli_cel(v.target.value)} 
                                    value={cli_cel}
                                />
                                <MdCheckCircle className="sucesso" />
                                <MdError className="erro"/>
                            </div>                  
                            <small>{errCel}</small>
                        </div>
                    </div>

                    <div className={valSenha} id="validaSn1">
                    <label for="password">Senha</label>
                    <div className="divInput">
                        <input
                            type="password"
                            id="password"
                            placeholder="Digite sua senha..." 
                            onChange={v => setUsu_senha(v.target.value)} 
                            value={usu_senha}
                        />
                        <MdCheckCircle className="sucesso" />
                        <MdError className="erro"/>
                    </div>                  
                    <small>{errSenha}</small>
                    </div>
            
                    <div className={valConfSenha} id="validaSn2">
                    <label for="password-confirmation">Confirmação de senha</label>
                    <div className="divInput">
                        <input
                            type="password"
                            id="password-confirmation"
                            placeholder="Digite sua senha novamente..." 
                            onChange={v => setConfSenha(v.target.value)} 
                            value={confSenha}
                        />
                        <MdCheckCircle className="sucesso" />
                        <MdError className="erro"/>
                    </div>                  
                    <small>{errConfSenha}</small>
                    </div>
            
                    <button type="submit">
                        <img src={IconCad} alt="cadastrar" />
                        {/* <MdPersonAddAlt /> */}
                        Enviar
                    </button>
                </form>
            </div>

            <Rodape />
        </>        
    );
}

export default CadUsuario;