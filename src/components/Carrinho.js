import React,{useState} from "react";
import Navbar from "./Navbar.js";
import Rodape from "./Rodape.js";
import CartList from "./CartList.js";
import {carrinho} from './../data/carrinho.json';

class Carrinho extends React.Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div>
        <Navbar />
        <CartList />
        <Rodape />
      </div>
    );
  }
}

export default Carrinho;