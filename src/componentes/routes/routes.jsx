import React from 'react'; 
import { 
    BrowserRouter as Router,  
    Routes, 
    Route
 } from 'react-router-dom'; 

import Home from '../pages/home/App'; 
import Produtos from '../pages/produtos/produtos';
import CadUsuarios from '../pages/usuario/cadUsuario'; 
import Contato from '../pages/contato/contato'; 
import Login from '../pages/login/login';

function Rotas() {
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/produtos' element={<Produtos />} />
                <Route path='/cadusuarios' element={<CadUsuarios />} /> 
                <Route path='/contato' element={<Contato />} />
                <Route path='/login' element={<Login />} />
            </Routes>            
        </Router>
    );
}

 export default Rotas;