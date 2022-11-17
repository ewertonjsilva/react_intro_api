import React from 'react'; 
import { 
    BrowserRouter as Router,  
    Routes, 
    Route
 } from 'react-router-dom'; 

import Home from '../pages/home/App'; 
import Produtos from '../pages/produtos/produtos';
import CadUsuarios from '../pages/usuario/cadUsuario';

 function Rotas() {
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/produtos' element={<Produtos />} />
                <Route path='/cadusuarios' element={<CadUsuarios />} />
            </Routes>            
        </Router>
    );
 }

 export default Rotas;