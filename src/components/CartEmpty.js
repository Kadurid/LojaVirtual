import React,{useState} from "react";
import Navbar from "./Navbar.js";
import Rodape from "./Rodape.js";
import CartList from "./CartList.js";
import {carrinho} from './../data/carrinho.json';

class CartEmpty extends React.Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div>
        <p>Aproveite nossos melhores preços, se esbanje de comprar tudo que pode comprar.</p>
      </div>
    );
  }
}

export default CartEmpty;