import React,{useState} from "react";
import './Rodape.css';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

class Body extends React.Component{
  render(){
    return(
      <div>
        <nav>
          <i className = "pi pi-envelope"></i>
          <h3>Contato</h3>
        </nav>
      </div>
    );
  }
}

export default Body;