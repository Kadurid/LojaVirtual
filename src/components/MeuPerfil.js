import React,{useState} from "react";
import Navbar from "./Navbar.js";
import Rodape from "./Rodape.js";

class MeuPerfil extends React.Component{
  render(){
    return(
      <div>
        <Navbar />
        <i className="pi pi-user"></i>
        <div>
          <h3>Nome: Fulano de Tal</h3>
          <h3>Endereço: Gotham City</h3>
        </div>
        <Rodape />
      </div>
    );
  }
}

export default MeuPerfil;