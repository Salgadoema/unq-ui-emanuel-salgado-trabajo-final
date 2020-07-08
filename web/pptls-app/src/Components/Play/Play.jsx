import React, { useState } from "react";
import { Button } from 'react-bootstrap';
import Notifications, {notify} from 'react-notify-toast';
import '../../Styles/Play.css';
import piedra from '../../Static/piedra.png'
import papel from '../../Static/papel.png'
import tijera from '../../Static/tijera.png'
import lagarto from '../../Static/lagarto.png'
import spock from '../../Static/spock.png'
import random from '../../Static/randomSelection.gif'
import ninguno from '../../Static/ninguno.png'
import looser from'../../Static/looser.jpg'

function Play() {

  const armas = ["piedra", "papel", "tijera", "lagarto", "spock"];
  const [colorBgnd, setColor] = useState({ colorBackgorund: 'violet' });
  const armasImg = [piedra, papel, tijera, lagarto, spock, random, ninguno,looser]
  const [unArma, setArma] = useState({ jugadorUno: "6", jugadorDos: "5", ganador: "" })
  let myColor = { background: '#0E1717', text: "#FFFFFF" };

  const[statusBtn, setStatusBtn]=useState({habilitado:true});
  const[statusimgLoser, setStatusimgLo]=useState({habilitado:false});
 
  const elegirArmaRandom = () => {

    return Math.floor(Math.random() * armas.length);
  }


function deshabilitar() {
  document.getElementById("myDIV1").style.opacity = "0.5";
  document.getElementById("myDIV2").style.opacity = "0.5";
  document.getElementById("myDIV3").style.opacity = "0.5";
  document.getElementById("myDIV4").style.opacity = "0.5";
  document.getElementById("myDIV5").style.opacity = "0.5";
  document.getElementById("myDIV6").style.opacity = "0.5";
  }
  function habilitar() {
    document.getElementById("myDIV1").style.opacity = "1";
    document.getElementById("myDIV2").style.opacity = "1";
    document.getElementById("myDIV3").style.opacity = "1";
    document.getElementById("myDIV4").style.opacity = "1";
    document.getElementById("myDIV5").style.opacity = "1";
    document.getElementById("myDIV6").style.opacity = "1";
    }
 

  const elegirArma = (arma) => {
    console.log(statusBtn)
    deshabilitar();
    if(statusBtn){
    setStatusBtn(false)
    
    const armaJ1 = arma
    const armaJ2 = elegirArmaRandom();
    const ganador = resultadoCombate(armaJ1, armaJ2);
    setArma({
      jugadorUno: armaJ1, jugadorDos: armaJ2, ganador,
    })
    
  }
  else{console.log("reinicia el juego")}
  
  }
  const borrarSets = () => {
    setArma({ jugadorUno: "6", jugadorDos: "5", ganador: "" })
    setColor({colorBackgorund:'violet'})
    setStatusBtn({habilitado:true})
    habilitar()
  }
  /**
  Tijera corta a Papel 
  Tijera decapita a Lagarto 
  
  Papel tapa a Piedra 
  Papel desautoriza a Spock 
  
  Piedra aplasta a Lagarto 
  Piedra aplasta a Tijera
  
  Lagarto envenena a Spock
  Lagarto devora a Papel
  
  Spock rompe a Tijera
  Spock vaporiza a Piedra
       * 0 empata
       * 1 pierde
       * 2 gana
       * Piedra Papel Tijera Lagarto Spock
  Piedra   0      1     2       2      1
  Papel    2      0     1       1      2   
  Tijera   1      2     0       2      1
  Lagarto  1      2     1       0      2
  Spock    2      1     2       1      0
  
  
  
       */
  const jugada = [
    [0, 1, 2, 2, 1],
    [2, 0, 1, 1, 2],
    [1, 2, 0, 2, 1],
    [1, 2, 1, 0, 2],
    [2, 1, 2, 1, 0]
  ];

  const resultadoCombate = (arma1, arma2) => {

    const resultado = jugada[arma2][arma1];
    switch (resultado) {
      case 0:


        setColor({ colorBackgorund: 'cornflowerblue' });
        notify.show("EMPATE", "info", 1000, myColor);
        return ("EMPATE");
        break
      case 1:
        setColor({ colorBackgorund: 'green' });
        notify.show("GANASTE", "success",1000, myColor);
        return ("GANASTE");
        break
      case 2:
        setColor({ colorBackgorund: 'red' });
        notify.show("PERDISTE", "error", 1000, myColor);
        setStatusimgLo(true);
        return ("PERDISTE");
        break
    }
  }
  

  return (
    <div className="container" style={{ backgroundColor: colorBgnd.colorBackgorund }} >
        <Notifications/>
      <div className="batalla">
        <h2 className="jug1">Jugador uno:{}</h2>
        <img  className="imgBatalla" src={armasImg[unArma.jugadorUno]} ></img>
        <h1>VS</h1> 
        <img className="imgBatalla" src={armasImg[unArma.jugadorDos]}></img>
        <h2 className="jug2">Jugador dos{armasImg.jugadorDos}</h2>
      </div>
      <div className="containerBtn">
       
        
      <div className="responsive">
      <h2>Elegi tu arma</h2>
      
        <img id="myDIV1" className="imgArma" src={armasImg[0]} onClick={() => elegirArma(0)}  ></img>
        <img id="myDIV2" className="imgArma" src={armasImg[1]} onClick={() => elegirArma(1)} ></img>
        <img id="myDIV3" className="imgArma" src={armasImg[2]} onClick={() => elegirArma(2)} ></img>
        <img id="myDIV4" className="imgArma" src={armasImg[3]} onClick={() => elegirArma(3)} ></img>
        <img id="myDIV5" className="imgArma" src={armasImg[4]} onClick={() => elegirArma(4)} ></img>
        <img id="myDIV6" className="imgArma" src={armasImg[5]} onClick={() => elegirArma(elegirArmaRandom())} ></img>
        <Button className="btnWeapon" onClick={() => borrarSets()} variant="primary">Reiniciar</Button>
      </div>
  
        <h1>{unArma.ganador}</h1>
      </div>
    </div>
  );
}

export default Play;

