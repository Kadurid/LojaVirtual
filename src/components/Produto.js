import React,{useState} from "react";
import {produtos} from './../data/produtos.json'

class Produto extends React.Component{
  
  render(){
    return(
      <div>
      {produtos.map((data,key) => {
        return(
          <div key={key}>
          {data.img + ','+data.descricao + ',' + data.valor + ',' + data.qtdEstoque}
          </div>
        );
      })}
      </div>
    );
  }
}

export default Produto;