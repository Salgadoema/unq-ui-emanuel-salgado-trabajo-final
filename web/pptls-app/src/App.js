
import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import { useHistory} from 'react-router-dom';
import piedra from './Static/piedra.png'
import papel from './Static/papel.png'
import tijera from './Static/tijera.png'
import lagarto from './Static/lagarto.png'
import spock from './Static/spock.png'
import {Button } from 'react-bootstrap';
import Notifications, { notify } from 'react-notify-toast';
function App() {
  let history = useHistory();
  const [name, setName]=  useState("");

  const updateName = ev => setName(ev.target.value);
  let myColor = { background: '#0E1717', text: "#FFFFFF" };

  function toPlay() {
    localStorage.setItem('userName',name);
    if(localStorage.getItem('userName')===""){
      notify.show("INGRESA TU NOMBRE", "error", 1000, myColor)}
    else{
      
    history.push("/Play")};
  }
  function toRules() {
     history.push("/Rules");
  }
  
  return (
 
    <div className="App">
        <Notifications />
            <div className="row">
            <div className="column">
                 <h1 className="title2"> P </h1>
                 <img className="App-logo" src={piedra}/>
            </div>
            <div class="column">
                 <h1 className="title2"> P </h1>
                 <img className="App-logo"src={papel}/>
            </div>
            <div class="column">
                 <h1 className="title2"> T </h1>
                 <img className="App-logo"src={tijera} />
            </div>
            <div class="column">
                 <h1 className="title2"> L </h1>
                 <img className="App-logo" src={lagarto} />
            </div>
            <div class="column">
                 <h1 className="title2"> S </h1>
                 <img className="App-logo" src={spock}/>
            </div>
          </div>

          <div class="column">
         <div>BIENVENIDO AL JUEGO PIEDRA-PAPEL-TIJERA-LAGARTO-SPOCK</div>
         <div >INGRESA TU NOMBRE: 
         <input className="inp" type="text" placeholder=" Username" name="uname"
                  onChange={updateName}
                  required/>
                  
                   <button className="inp1" type="button" onClick={()=>toPlay()}  >A JUGAR!!!</button>
                   <button className="inp2" type="button" onClick={()=>toRules()}  >REGLAS</button>
                   
        </div> 
            </div>
    </div>

  );
}

export default App;
