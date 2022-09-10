import React from "react";
import './header.css'
import Ani from '../../../src/assets/animais.jpg'
function Topo(){
    return(
        <div className="topo">
        <img src={Ani} className='img'></img>
            <button className="bt1">E-MAIL</button>
            <h1 className="title">Mundo dos Animais</h1>
            <button className="bt">Animais Selvagens</button>
            <button className="bt">Animais Dométicos</button>
            <button className="bt">Animais Venenosos</button>
            <button className="bt">Animais Mamiferos</button>
        </div>
    )
};
export default Topo;