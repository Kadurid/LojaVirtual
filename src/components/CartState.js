import React,{useState} from "react";
import Navbar from "./Navbar.js";
import Rodape from "./Rodape.js";
import CartList from "./CartList.js";
import CartEmpty from './CartEmpty.js';
import {carrinho} from './../data/carrinho.json';


class CartState extends React.Component{
  constructor(){
    super();
  }
  render(){
    if(carrinho.length == 0){
      return <CartEmpty />
    }
    else{
      return <CartList />
    }
  }
}

export default CartState;