import React,{useState} from "react";
import './Body.css';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import Produto from './Produto.js';

class Body extends React.Component{
  render(){
    return(
      <div>
        <Produto />
      </div>
    );
  }
}

export default Body;