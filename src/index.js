import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MeuPerfil from './components/MeuPerfil';
import Carrinho from './components/Carrinho';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path='/' exact={true} component={App}/>
      <Route path='/perfil' component={MeuPerfil}/>
      <Route path="/carrinho" component={Carrinho}/>
    </Switch>
  </Router>
  
  ,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
