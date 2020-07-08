import React, { useState } from "react";
import { Button } from 'react-bootstrap';
import '../../Styles/Play.css';
import piedra from '../../Static/piedra.png'
import papel from '../../Static/papel.png'
import tijera from '../../Static/tijera.png'
import lagarto from '../../Static/lagarto.png'
import spock from '../../Static/spock.png'
import random from '../../Static/randomSelection.gif'
import ninguno from '../../Static/ninguno.png'

function Play() {

  const armas = ["piedra", "papel", "tijera", "lagarto", "spock"];
  const [colorBgnd, setColor] = useState({ colorBackgorund: 'violet' });
  const armasImg = [piedra, papel, tijera, lagarto, spock, random, ninguno]
  const [unArma, setArma] = useState({ jugadorUno: "5", jugadorDos: "5", ganador: "" })


  const[statusBtn, setStatusBtn]=useState({habilitado:true});

 
  const elegirArmaRandom = () => {

    return Math.floor(Math.random() * armas.length);
  }



 

  const elegirArma = (arma) => {
    console.log(statusBtn)
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
    setArma({ jugadorUno: "5", jugadorDos: "5", ganador: "" })
    setColor({colorBackgorund:'violet'})
    setStatusBtn({habilitado:true})
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
        return ("empate");
        break
      case 1:
        setColor({ colorBackgorund: 'green' });
        return ("gano Jugador 1");
        break
      case 2:
        setColor({ colorBackgorund: 'red' });
        return ("gano Jugador 2");
        break
    }
  }

  return (
    <div className="container" style={{ backgroundColor: colorBgnd.colorBackgorund }} >
      <div className="batalla">
        <h2 className="jug1">Jugador uno:{}</h2>
        <img className="imgBatalla" src={armasImg[unArma.jugadorUno]}></img>
        <h1>VS</h1>
        <img className="imgBatalla" src={armasImg[unArma.jugadorDos]}></img>
        <h2 className="jug2">Jugador dos{armasImg.jugadorDos}</h2>
      </div>
      <div className="containerBtn">
       
          <h2>Elegi tu arma</h2>
      <div className="responsive">

        <img className="imgArma" src={armasImg[0]} onClick={() => elegirArma(0)}></img>
        
       
        <img className="imgArma" src={armasImg[1]} onClick={() => elegirArma(1)} ></img>

       
        <img className="imgArma" src={armasImg[2]} onClick={() => elegirArma(2)} ></img>

         
        <img className="imgArma" src={armasImg[3]} onClick={() => elegirArma(3)} ></img>

       
        <img className="imgArma" src={armasImg[4]} onClick={() => elegirArma(4)} ></img>

      
        <img className="imgArma" src={armasImg[5]} onClick={() => elegirArma(elegirArmaRandom())} ></img>

          <Button className="btnWeapon" onClick={() => borrarSets()} variant="primary">Reiniciar</Button>

        </div>
  
        <h1>{unArma.ganador}</h1>
      </div>
    </div>
  );
}

export default Play;

