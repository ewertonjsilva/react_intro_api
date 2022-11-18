import React, { useState } from 'react';
import { MdCheckCircle, MdError, MdPersonAddAlt } from "react-icons/md";

import IconCad from '../../../imagens/icones/cadastrar.svg';

import './cadUsuario.css';

function CadUsuario() { 

    const [usu_nome, setUsu_nome] = useState(''); 
    const [usu_email, setUsu_email] = useState(''); 
    const [cid_id, setCid_id] = useState(0); 
    const [end_logradouro, setEnd_logradouro] = useState(''); 
    const [end_num, setEnd_Num] = useState(''); 
    const [end_bairro, setEnd_Bairro] = useState(''); 
    const [end_complemento, setEnd_Complemento] = useState(''); 
    const [cli_cel, setCli_cel] = useState(''); 
    const [usu_senha, setUsu_senha] = useState(''); 
    const [usu_tipo, setUsu_tipo] = useState(2); // somento cliente pelo cadastrar do site

    // não registra no banco
    const [uf, setUf] = useState('');
    const [confSenha, setConfSenha] = useState('');

    return(
        <div className="container">
            <div>
                <h2>Criar uma conta</h2>
            </div>
            <form id="form" className="form">
                <div className="form-control" id="valNome">
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
                        <MdError className="erro"/>
                    </div>                    
                    <small id="nome">Insira o nome completo do usuário</small>
                </div>
        
                <div className="form-control" id="valEmail">
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
                  <small>Insira o e-mail corretamente!</small>
                </div>
        
                <div className="doisItens">
                    <div className="form-control" id="valEstado">
                        <label for="estado">Estado</label>
                        <div className="divInput">
                            <select name="selUf" id="estado">
                                <option selected disabled onChange={e => setUf(e.target.value)} value={uf} >Sel. estado</option>
                                <option value="1">SP</option>
                                <option value="2">RJ</option>
                                <option value="3">PR</option>
                            </select>
                            <MdCheckCircle className="sucesso" />
                            <MdError className="erro"/>
                        </div>                  
                        <small>Campo obrigatório!</small>
                      </div>

                      <div className="form-control" id="valCidade">
                        <label for="cidade">Cidade</label>
                        <div className="divInput">
                            <select name="selCidade" id="cidade">
                                <option selected disabled value="0">Selecione a cidade</option>
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

                <div className="form-control" id="valLog">
                    <label for="logradouro">Logradouro</label>
                    <div className="divInput">
                        <input
                            type="text"
                            id="logradouro"
                            placeholder="Digite o endereço..."
                        />
                        <MdCheckCircle className="sucesso" />
                        <MdError className="erro"/>
                    </div>                    
                    <small>Insira os dados referente ao endereço</small>
                </div>

                <div className="doisItens">
                    <div className="form-control" id="valNum">
                        <label for="num">Número</label>
                        <div className="divInput">
                            <input
                                type="text"
                                id="num"
                                placeholder="nº do endereço"
                            />
                            <MdCheckCircle className="sucesso" />
                            <MdError className="erro"/>
                        </div>                  
                        <small>Campo obrigatório!</small>
                      </div>

                      <div className="form-control" id="valBairro">
                        <label for="bairro">Bairro</label>
                        <div className="divInput">
                            <input
                                type="text"
                                id="bairro"
                                placeholder="Insira o nome do bairro"
                            />
                            <MdCheckCircle className="sucesso" />
                            <MdError className="erro"/>
                        </div>                  
                        <small>Selecione a cidade!</small>
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
                            />
                            <MdCheckCircle className="sucesso" />
                            <MdError className="erro"/>
                        </div>                  
                        <small>-</small>
                      </div>

                      <div className="form-control" id="valCelular">
                        <label for="celular">nº celular</label>
                        <div className="divInput">
                            <input
                                type="text"
                                id="celular"
                                placeholder="Insira o nº do celular"
                            />
                            <MdCheckCircle className="sucesso" />
                            <MdError className="erro"/>
                        </div>                  
                        <small>O nº do celular é obrigatório</small>
                      </div>
                </div>

                <div className="form-control" id="validaSn1">
                  <label for="password">Senha</label>
                  <div className="divInput">
                    <input
                        type="password"
                        id="password"
                        placeholder="Digite sua senha..."
                    />
                    <MdCheckCircle className="sucesso" />
                    <MdError className="erro"/>
                  </div>                  
                  <small>A senha precisa ter no mínimo 7 caracteres.</small>
                </div>
        
                <div className="form-control" id="validaSn2">
                  <label for="password-confirmation">Confirmação de senha</label>
                  <div className="divInput">
                    <input
                        type="password"
                        id="password-confirmation"
                        placeholder="Digite sua senha novamente..."
                    />
                    <MdCheckCircle className="sucesso" />
                    <MdError className="erro"/>
                  </div>                  
                  <small>Confirmação obrigatória, as senhas inseridas devem ser iguais!</small>
                </div>
        
                <button type="submit">
                    <img src={IconCad} alt="cadastrar" />
                    {/* <MdPersonAddAlt /> */}
                    Enviar
                </button>
            </form>
        </div>
    );
}

export default CadUsuario;