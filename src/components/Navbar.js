import React,{useState} from "react";
import './Navbar.css';
import { InputText } from 'primereact/inputtext';
class Navbar extends React.Component{
  render(){
    return(
      <div>
        <nav>
        <a><img src="../../public/logo192.png" alt="logo"/></a>
        <InputText value={Pesquise aqui} />

        </nav>
      </div>
    );
  }
}

export default Navbar;