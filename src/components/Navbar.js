import React,{useState} from "react";
import './Navbar.css';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

class Navbar extends React.Component{
  render(){
    return(
      <div>
        <nav>
        <a><img src={"../../../public/logo192.png"} className="App-logo" alt="logo"/></a>
            <a>Nome da Loja</a>
          <span className="p-float-label">
            <InputText id="in"/>
            <label htmlFor="in">Pesquise aqui</label>
          </span>
          <Button icon="pi pi-search" className="p-button-rounded" />
          <Button label="Mais opções"/>
          <Button id="carrinho" icon="pi pi-shopping-cart" label="Meu carrinho" iconPos="right"/>
          <Button id="perfil" icon="pi pi-user" label="Meu perfil" iconPos="right"/>
        </nav>
      </div>
    );
  }
}

export default Navbar;