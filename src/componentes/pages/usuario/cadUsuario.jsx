import './cadUsuario.css';

function CadUsuario() {
    return(
        <div class="container">
            <div>
                <h2>Criar uma conta</h2>
            </div>
            <form id="form" class="form">
                <div class="form-control" id="valNome">
                    <label for="username">Nome de usuário</label>
                    <div class="divInput">
                        <input
                            type="text"
                            id="username"
                            placeholder="Digite seu nome de usuário..."
                        />
                        {/* <i class="fas fa-exclamation-circle"></i> */}
                        <span class="material-icons sucesso">
                            check_circle
                        </span>
                        <span class="material-icons erro">
                            error
                        </span>
                        {/* <i class="fas fa-check-circle"></i> */}
                    </div>                    
                    <small id="nome">Insira o nome completo do usuário</small>
                </div>
        
                <div class="form-control" id="valEmail">
                  <label for="email">Email</label>
                  <div class="divInput">
                    <input type="text" id="email" placeholder="Digite seu email.." />
                    <span class="material-icons sucesso">
                        check_circle
                    </span>
                    <span class="material-icons erro">
                        error
                    </span>
                  </div>                  
                  <small>Insira o e-mail corretamente!</small>
                </div>
        
                <div class="doisItens">
                    <div class="form-control" id="valEstado">
                        <label for="estado">Estado</label>
                        <div class="divInput">
                          <select name="selUf" id="estado">
                            <option selected disabled value="0">Sel. estado</option>
                            <option value="1">SP</option>
                            <option value="2">RJ</option>
                            <option value="3">PR</option>
                          </select>
                          <span class="material-icons sucesso">
                              check_circle
                          </span>
                          <span class="material-icons erro">
                              error
                          </span>
                        </div>                  
                        <small>Campo obrigatório!</small>
                      </div>

                      <div class="form-control" id="valCidade">
                        <label for="cidade">Cidade</label>
                        <div class="divInput">
                            <select name="selCidade" id="cidade">
                                <option selected disabled value="0">Selecione a cidade</option>
                                <option value="1">Tupã</option>
                                <option value="2">Parapuã</option>
                                <option value="3">Marília</option>
                            </select>
                          <span class="material-icons sucesso">
                              check_circle
                          </span>
                          <span class="material-icons erro">
                              error
                          </span>
                        </div>                  
                        <small>Selecione a cidade!</small>
                      </div>
                </div>

                <div class="form-control" id="valLog">
                    <label for="logradouro">Logradouro</label>
                    <div class="divInput">
                        <input
                            type="text"
                            id="logradouro"
                            placeholder="Digite o endereço..."
                        />
                        {/* <i class="fas fa-exclamation-circle"></i> */}
                        <span class="material-icons sucesso">
                            check_circle
                        </span>
                        <span class="material-icons erro">
                            error
                        </span>
                        {/* <i class="fas fa-check-circle"></i> */}
                    </div>                    
                    <small>Insira os dados referente ao endereço</small>
                </div>

                <div class="doisItens">
                    <div class="form-control" id="valNum">
                        <label for="num">Número</label>
                        <div class="divInput">
                            <input
                                type="text"
                                id="num"
                                placeholder="nº do endereço"
                            />
                          <span class="material-icons sucesso">
                              check_circle
                          </span>
                          <span class="material-icons erro">
                              error
                          </span>
                        </div>                  
                        <small>Campo obrigatório!</small>
                      </div>

                      <div class="form-control" id="valBairro">
                        <label for="bairro">Bairro</label>
                        <div class="divInput">
                            <input
                                type="text"
                                id="bairro"
                                placeholder="Insira o nome do bairro"
                            />
                          <span class="material-icons sucesso">
                              check_circle
                          </span>
                          <span class="material-icons erro">
                              error
                          </span>
                        </div>                  
                        <small>Selecione a cidade!</small>
                      </div>
                </div>

                <div class="doisItens">
                    <div class="form-control" id="valComp">
                        <label for="comp">Complemento</label>
                        <div class="divInput">
                            <input
                                type="text"
                                id="comp"
                                placeholder="Complemento do endereço"
                            />
                          <span class="material-icons sucesso">
                              check_circle
                          </span>
                          <span class="material-icons erro">
                              error
                          </span>
                        </div>                  
                        <small>-</small>
                      </div>

                      <div class="form-control" id="valCelular">
                        <label for="celular">nº celular</label>
                        <div class="divInput">
                            <input
                                type="text"
                                id="celular"
                                placeholder="Insira o nº do celular"
                            />
                          <span class="material-icons sucesso">
                              check_circle
                          </span>
                          <span class="material-icons erro">
                              error
                          </span>
                        </div>                  
                        <small>O nº do celular é obrigatório</small>
                      </div>
                </div>

                <div class="form-control" id="validaSn1">
                  <label for="password">Senha</label>
                  <div class="divInput">
                    <input
                        type="password"
                        id="password"
                        placeholder="Digite sua senha..."
                    />
                    <span class="material-icons sucesso">
                        check_circle
                    </span>
                    <span class="material-icons erro">
                        error
                    </span>
                  </div>                  
                  <small>A senha precisa ter no mínimo 7 caracteres.</small>
                </div>
        
                <div class="form-control" id="validaSn2">
                  <label for="password-confirmation">Confirmação de senha</label>
                  <div class="divInput">
                    <input
                        type="password"
                        id="password-confirmation"
                        placeholder="Digite sua senha novamente..."
                    />
                    <span class="material-icons sucesso">
                        check_circle
                    </span>
                    <span class="material-icons erro">
                        error
                    </span>
                  </div>                  
                  <small>Confirmação obrigatória, as senhas inseridas devem ser iguais!</small>
                </div>
        
                <button type="submit">
                    <img src="../imagens/icones/cadastrar.svg" alt="cadastrar" />
                    Enviar
                </button>
            </form>
        </div>
    );
}

export default CadUsuario;