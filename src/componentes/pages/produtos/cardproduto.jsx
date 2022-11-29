import React, { useState, useEffect } from 'react'; 
import { Link, useNavigate } from 'react-router-dom';
import './produtos.css';

function CardProd({prd}) { 

    const p = prd ? prd : {}; 
    let navigate = useNavigate();

    function verProd() {
        // window.location.reload(true);
        navigate('/produto', {state: p});
    }

    return(
        <div className="cardProd" key={p.prd_id} onClick={() => verProd()}>
            <img src={p.prd_img} alt={'Imagem ' + p.prd_nome} />
            <span className="descricao">{p.prd_nome}</span>
            <span>{'R$ ' + p.prd_valor}</span>
        </div>
    );
}

export default CardProd;