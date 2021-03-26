import React,{useState} from "react";
import {produtos} from './../data/produtos.json'
import {carrinho} from './../data/carrinho.json'
import './style.css';
import './Produto.css';

class Produto extends React.Component{

  constructor(){
    super();
    var shoppingCart = [];
    this.handleComprar = this.handleComprar.bind(this);
    this.shoppingCart = shoppingCart;
  }  
 
  //const  shoppingCart = [];
  handleComprar(data){
        let produto = [data.id, data.descricao, data.valor];
        this.shoppingCart.push(produto);
        carrinho.push(data);
        var item = JSON.stringify(carrinho);
        alert('Adicionado ao carrinho');
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
                        <div className="text-center" ><button className="btn btn-primary" onClick={() => { this.handleComprar(data);}}>Comprar</button>
                        </div>
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