import React,{useState} from "react";
import Navbar from "./Navbar.js";
import Rodape from "./Rodape.js";

class Carrinho extends React.Component{
  render(){
    return(
      <div>
        <Navbar />
        
        <Rodape />
      </div>
    );
  }
}

export default Carrinho;