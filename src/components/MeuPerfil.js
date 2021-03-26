import React,{useState} from "react";
import Navbar from "./Navbar.js";
import Rodape from "./Rodape.js";
import './style.css';
import './MeuPerfil.css';

class MeuPerfil extends React.Component{
  render(){
    return(
      <div>
        <Navbar />
        <div id="perfilContainer" className="col-md-6">
            <div className="row">
                <div className="col-md-5 foto">
                    <i className="pi pi-user"></i>
                </div>

                <div className="col-md-7 info">
                    <h3>Nome: Fulano de Tal</h3>
                    <h3>Endereço: Gotham City</h3>
                </div>
            </div>
        </div>
        <Rodape />
      </div>
    );
  }
}

export default MeuPerfil;