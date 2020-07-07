import React, { useState } from "react";
import {Button } from 'react-bootstrap';
import '../../Styles/Play.css';
import piedra from '../../Static/piedra.png'
import papel from '../../Static/papel.png'
import tijera from '../../Static/tijera.png'
import lagarto from '../../Static/lagarto.png'
import spock from '../../Static/spock.png'
<<<<<<< HEAD
import random from '../../Static/randomSelection.gif'
=======
>>>>>>> e0dff4f54e48a937b34939871df2502f3e2dd3ad
function Play(){

  const armas = ["piedra", "papel", "tijera", "lagarto", "spock"];
  const [colorBgnd, setColor] =useState({colorBackgorund:'violet'});
<<<<<<< HEAD
  const armasImg=[piedra,papel, tijera, lagarto, spock, random]
  const [unArma, setArma] = useState({ jugadorUno: "5", jugadorDos: "5", ganador: "" })
  const [contador, setContador] = React.useState(5);

 
  React.useEffect(() => {
    contador > 0 && setTimeout(() => setContador(contador - 1), 1000);
  }, [contador]);
  
  const elegirArmaRandom=()=>{
  
    return Math.floor(Math.random() * armas.length);
  }

  const esperar=()=>{
    for (var i = 10000; i < contador; i--) {

  }    
     
  }

  const elegirArma=(arma)=>{
    const armaJ1 = arma
    const armaJ2 = elegirArmaRandom();
    const ganador = resultadoCombate(armaJ1, armaJ2);
    setArma({jugadorUno: armaJ1, jugadorDos: armaJ2, ganador,
    })
  }
  const borrarSets=()=>{
    setArma({ jugadorUno: "5", jugadorDos: "5", ganador: "" })

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


=======
  const armasImg=[piedra,papel, tijera, lagarto, spock]
  const [unArma, setArma] = useState({ jugadorUno: "", jugadorDos: "", ganador: "" })
  
  
  const elegirArmaRandom=()=>{
    return Math.floor(Math.random() * armas.length);
  }
  const elegirArma=(arma)=>{
    const armaJ1 = arma
    console.log("arma j1 "+ armas [armaJ1]);
    console.log("random "+armas.length);
    const armaJ2 = elegirArmaRandom();
    console.log("arma j2 "+ armas[armaJ2]);
    const ganador = resultadoCombate(armaJ1, armaJ2);
    setArma({jugadorUno: armaJ1, jugadorDos: armaJ2, ganador,
    })
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


>>>>>>> e0dff4f54e48a937b34939871df2502f3e2dd3ad

     */
  const jugada = [
    [0,1,2,2,1],
    [2,0,1,1,2],
    [1,2,0,2,1],
    [1,2,1,0,2],
    [2,1,2,1,0]
  ];

  const resultadoCombate = (arma1,arma2)=>{

    const resultado = jugada[arma2][arma1];
    switch(resultado){
     case 0:
     
     
       setColor({colorBackgorund:'cornflowerblue'});
        return("empate");
      break
      case 1:
        setColor({colorBackgorund:'greenyellow'});
        return ("gano Jugador 1");
      break
      case 2:
        setColor({colorBackgorund:'palevioletred'});
        return ("gano Jugador 2");
      break
    }
  }
<<<<<<< HEAD

    return (
      <div className="container" style={{backgroundColor: colorBgnd.colorBackgorund}} >
        <div className="batalla">
          <h2 className="jug1">Jugador uno:{}</h2>
           <img src={armasImg[unArma.jugadorUno]}></img>
        
        
        <h1>VS</h1>
        
           <img src={armasImg[unArma.jugadorDos]}></img>
           <h2 className="jug2">Jugador dos{armasImg.jugadorDos}</h2>
</div>
           <div className="containerBtn">
          <h1>{unArma.ganador}</h1> 
          Elegi tu arma
      <div>
        <Button className="btnWeapon" onClick={()=>elegirArma(0)} variant="primary">Piedra</Button>
        </div>
        <div>
        <Button className="btnWeapon" onClick={()=>elegirArma(1)} variant="primary">Papel</Button>
        </div>
        <div>
        <Button className="btnWeapon" onClick={()=>elegirArma(2)} variant="primary">Tijera</Button>
        </div>
        <div>
        <Button className="btnWeapon" onClick={()=>elegirArma(3)} variant="primary">Lagarto</Button>
=======
    return (
      <div className="container" style={{backgroundColor: colorBgnd.colorBackgorund}} >
         Elegi tu arma
        <div className="batalla">
         
       
           <h2 className="jug1">Jugador uno:{}</h2>
           <img src={armasImg[unArma.jugadorUno]}></img>
           <h1>VS</h1>
           <h2 className="jug2">Jugador dos:{armasImg.jugadorDos}</h2>
           <img src={armasImg[unArma.jugadorDos]}></img>
           
          </div>
          <div >
          <h1>{unArma.ganador}</h1> 
          
        <Button className="btnWeapon" onClick={()=>elegirArma(0)} variant="primary">Piedra</Button>
        <Button className="btnWeapon" onClick={()=>elegirArma(1)} variant="primary">Papel</Button>
        <Button className="btnWeapon" onClick={()=>elegirArma(2)} variant="primary">Tijera</Button>
        <Button className="btnWeapon" onClick={()=>elegirArma(3)} variant="primary">Lagarto</Button>
        <Button className="btnWeapon" onClick={()=>elegirArma(4)} variant="primary">Spock</Button>
        <Button className="btnWeapon" onClick={()=>elegirArma(elegirArmaRandom())} variant="primary">Random</Button>
        </div>
>>>>>>> e0dff4f54e48a937b34939871df2502f3e2dd3ad
        </div>
        <div>
        <Button className="btnWeapon" onClick={()=>elegirArma(4)} variant="primary">Spock</Button>
        </div>
        <div>
        <Button className="btnWeapon" onClick={()=>elegirArma(elegirArmaRandom())} variant="primary">Random</Button>
        </div>
        <Button className="btnWeapon" onClick={()=>borrarSets()} variant="primary">Reiniciar</Button>
        </div>
        </div>

  );
}

export default Play;

