import React,{useState} from "react";
import {produtos} from './../data/produtos.json'
import './Produto.css';

class Produto extends React.Component{
  constructor(){
    super();
  }  
  render(){
    return(
    <div id="container-produto" className="col-md-10">
      <div className="row">
      {produtos.map((data,key) => {
        return(
          <div key={key} className="col-sm-6 col-md-3 produto">
            <div className="produto-item">
                <div className="col-md-12">
                    <figure><img src={data.img} className="img-responsive"/></figure>
                </div>
                <div className="col-md-12 descricao">
                    <header>{data.descricao.substr(0, 25)+"..."}</header>
                    <section><b>Disponível:</b>{data.qtdEstoque}</section>
                    <footer className="">
                        <b>Valor:R${data.valor}<br/><br/></b>
                        <div className="text-center"><a className="btn btn-primary">Comprar</a></div>
                    </footer>
                </div>
            </div>
          </div>
          
        );
      })}
      </div>
      </div>
    );
  }
//   $(document).ready(function(){
//     return(
//       <p>oii</p>
//     );
//   });
}

export default Produto;