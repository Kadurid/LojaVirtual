import React from 'react';
import NavBar from "./components/Navbar.js";
//=====================
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

class App extends React.Component{
  render(){
    return(
      <div>
       <NavBar />
      </div>
    );
  }
}

export default App;
