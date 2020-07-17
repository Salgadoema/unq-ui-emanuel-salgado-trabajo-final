
import React, { useState } from "react";
import './App.css';
import { useHistory} from 'react-router-dom';
import piedra from './Static/piedra.png'
import papel from './Static/papel.png'
import tijera from './Static/tijera.png'
import lagarto from './Static/lagarto.png'
import spock from './Static/spock.png'
import Notifications, { notify } from 'react-notify-toast';

function App() {
  
  const [name, setName]=  useState('');
  const [name2, setName2]=  useState('');
  const [visibilidad, setVisibilidad] =useState('hidden')
  const [invisibilidad, setInVisibilidad] =useState('visible')
  let history = useHistory();

  const updateName = ev => setName(ev.target.value);
  const updateName2 = ev => setName2(ev.target.value);

  let myColor = { background: '#0E1717', text: "#FFFFFF" };

  function toPlay() {
    setInVisibilidad('visible')
    setVisibilidad('hidden')
    localStorage.setItem('userName',name);
    if(!localStorage.getItem('userName')){
      notify.show("INGRESA TU NOMBRE", "error", 1000, myColor)}
    else{
      history.push("/Play")};
  }

  function tienenMismoNombre(){
    return (localStorage.getItem('userName2') === localStorage.getItem('userName'))
  }
  function mostrarJugador2(){
    setVisibilidad('visible')
    setInVisibilidad('hidden')
  }
  function mostrarJugador1(){
    setVisibilidad('hidden')
    setInVisibilidad('visible')
  }


  function toPlay2j() {
   
    localStorage.setItem('userName2',name2);
    localStorage.setItem('userName',name);
    if(!localStorage.getItem('userName2') || !localStorage.getItem('userName') ){
      notify.show("INGRESA NOMBRE DE AMBOS JUGADORES", "error", 1000, myColor)
    }
    else{
        if(tienenMismoNombre()){
          notify.show("AMBOS JUGADORES NO PUEDEN TENER EL MISMO NOMBRE, CAMBIA UNO", "error", 1000, myColor)
        }
        else{history.push("/DosJugadores")};
    }
  
  }

  function toRules() {
     history.push("/Rules");
  }


  
  return (
 
    <div className="App">
        <Notifications />
            <div className="row">
              <div className="column">
                  <h1 className="title2"> Pi </h1>
                  <img alt="piedra" className="App-logo" src={piedra}/>
              </div>
              <div className="column">
                  <h1 className="title2"> Pa </h1>
                  <img alt="papel"  className="App-logo"src={papel}/>
              </div>
              <div className="column">
                  <h1 className="title2"> Ti </h1>
                  <img alt="tijera" className="App-logo"src={tijera} />
              </div>
              <div className="column">
                 <h1 className="title2"> La </h1>
                 <img alt="lagarto" className="App-logo" src={lagarto} />
              </div>
              <div className="column">
                 <h1 className="title2"> S </h1>
                 <img alt="spock" className="App-logo" src={spock}/>
              </div>
          </div>

          <div className="column">
              <div>BIENVENIDO AL JUEGO PiPaTiLaS...<br/>
                  <button className="inp1" type="button" onClick={()=>mostrarJugador1()}   >Jugar vs PC </button>
                  <button style={{visibility:invisibilidad}}className="inp1" type="button" onClick={()=>mostrarJugador2()}  >2 Jugadores </button>
                  <button className="inp2" type="button" onClick={()=>toRules()}  >REGLAS</button>
              </div>
              <div className="column">
                <div>INGRESE NOMBRE JUGADOR 1: 
                  <input className="inp" type="text" placeholder="NOMBRE" name="uname"
                       onChange={updateName}
                       required/>
                  <button style={{visibility:invisibilidad}} className="inp3" type="button" onClick={()=>toPlay()}>A JUGAR!! {'>'} </button>
                </div>
                <div className="column" style={{visibility:visibilidad}}>INGRESE NOMBRE JUGADOR 2:
                  <input className="inp" type="text" placeholder="NOMBRE" name="uname"
                           onChange={updateName2}
                           required/>
                  <button className="inp3" type="button" onClick={()=>toPlay2j()}  >A JUGAR!! {'>'} </button>
                </div>
              </div>
          </div> 
    </div>

  );
}

export default App;
