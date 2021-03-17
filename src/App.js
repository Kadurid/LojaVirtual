import React from 'react';
import NavBar from "./components/Navbar.js";
import Body from "./components/Body.js";
import Rodape from "./components/Rodape.js";
//=====================
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

class App extends React.Component{
  render(){
    return(
      <div>
       <NavBar />
       <Body />
       <Rodape />
      </div>
    );
  }
}

export default App;
