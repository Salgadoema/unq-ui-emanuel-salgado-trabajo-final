import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Notifications, { notify } from 'react-notify-toast';
import '../../Styles/Play.css';
import piedra from '../../Static/piedra.png'
import papel from '../../Static/papel.png'
import tijera from '../../Static/tijera.png'
import lagarto from '../../Static/lagarto.png'
import spock from '../../Static/spock.png'
import random from '../../Static/randomSelection.gif'
import ninguno from '../../Static/ninguno.png'

export const armas=[] ;

function Play() {

  const armas = ["piedra", "papel", "tijera", "lagarto", "spock"];
  const [contadorJug1, setContadorJ1] = useState(0)
  const [contPc, setContPc] = useState(0)
  const [colorBgndBtn, setColorBtn] = useState({ colorBackgorundBtn: 'violet' });
  const [shadowBtn, setShadowBtn] = useState('')
  const [colorBgnd, setColor] = useState({ colorBackgorund: 'violet' });
  const [opacityBtn, setOpacity] = useState('0.1')
  const [cursorBtn, setCursor] = useState('not-allowed')
  const armasImg = [piedra, papel, tijera, lagarto, spock, random, ninguno]
  const [unArma, setArma] = useState({ jugadorUno: "6", computadora: "5", ganador: "" })
  let myColor = { background: '#0E1717', text: "#FFFFFF" };
  const [statusBtn, setStatusBtn] = useState({ habilitado: true });
  const elegirArmaRandom = () => { return Math.floor(Math.random() * armas.length); }


 function deshabilitarBotones() {
  document.getElementById("myDIV1").style.opacity = "0.5";
  document.getElementById("myDIV1").style.cursor = 'not-allowed';
  document.getElementById("myDIV2").style.opacity = "0.5";
  document.getElementById("myDIV2").style.cursor = 'not-allowed';
  document.getElementById("myDIV3").style.opacity = "0.5";
  document.getElementById("myDIV3").style.cursor = 'not-allowed';
  document.getElementById("myDIV4").style.opacity = "0.5";
  document.getElementById("myDIV4").style.cursor = 'not-allowed';
  document.getElementById("myDIV5").style.opacity = "0.5";
  document.getElementById("myDIV5").style.cursor = 'not-allowed';
  document.getElementById("myDIV6").style.opacity = "0.5";
  document.getElementById("myDIV6").style.cursor = 'not-allowed';
  }

  function habilitarBotones() {
    document.getElementById("myDIV1").style.opacity = "1";
    document.getElementById("myDIV1").style.cursor = 'pointer';
    document.getElementById("myDIV2").style.opacity = "1";
    document.getElementById("myDIV2").style.cursor = 'pointer';
    document.getElementById("myDIV3").style.opacity = "1";
    document.getElementById("myDIV3").style.cursor = 'pointer';
    document.getElementById("myDIV4").style.opacity = "1";
    document.getElementById("myDIV4").style.cursor = 'pointer';
    document.getElementById("myDIV5").style.opacity = "1";
    document.getElementById("myDIV5").style.cursor = 'pointer';
    document.getElementById("myDIV6").style.opacity = "1";
    document.getElementById("myDIV6").style.cursor = 'pointer';
  }



  const elegirArmaJugador1 = (arma) => {

    deshabilitarBotones();
    if (statusBtn) {
      setStatusBtn(false)
      const armaJ1 = arma
      const armaPc = elegirArmaRandom();
      const ganador = resultadoCombate(armaJ1, armaPc);
      setArma({ jugadorUno: armaJ1, computadora: armaPc, ganador, })

    }
    else { 
      notify.show ("TOCA REVANCHA PARA JUGAR OTRA PARTIDA","warning",2000,'RED')
      console.log("reinicia el juego") }

  }
  const deshabilitarRevancha = () => {
    setColorBtn({ colorBackgorundBtn: 'violet' });
    setShadowBtn('')
    setStatusBtn({ habilitado: true })
    setOpacity('0.1')
    setCursor('not-allowed')
  }
  const borrarSets = () => {
    setArma({ jugadorUno: "6", computadora: "5", ganador: "" })
    setColor({ colorBackgorund: 'violet' })
    deshabilitarRevancha()
    habilitarBotones()



  }

  const jugada =
    /**
     * REGLAS
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
    [
      [0, 1, 2, 2, 1],
      [2, 0, 1, 1, 2],
      [1, 2, 0, 2, 1],
      [1, 2, 1, 0, 2],
      [2, 1, 2, 1, 0]
    ];

    const resultadoCombate = (arma1, arma2) => {

      const resultado = jugada[arma2][arma1];
      setColorBtn({ colorBackgorundBtn: colorBgnd.colorBackgorund });
      setOpacity('1')
      setCursor('pointer')
      setShadowBtn(' 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)')
      switch (resultado) {
        case 0:
          setColor({ colorBackgorund: 'cornflowerblue' });
          notify.show("EMPATE", "info", 1000, myColor);
          return ("EMPATE");

  
        case 1:
          setColor({ colorBackgorund: 'green' });
          notify.show("GANASTE", "success", 1000, myColor);
          setContadorJ1(contadorJug1 + 1)
          return ("GANASTE");
  
        case 2:
          setColor({ colorBackgorund: 'red' });
          notify.show("PERDISTE", "error", 1000, myColor);
          setContPc(contPc + 1)
          return ("PERDISTE");

          default:
                  console.log("nada")
          
      }
    }
    function restarCount(){
      setContadorJ1(0)
      setContPc(0)
  }
  
  let history = useHistory();
  function iraHome() {
      history.push("/");
  }

  return (

    <>
    <Notifications />
      <div className="container" style={{ backgroundColor: colorBgnd.colorBackgorund }} >
      <h3>JUGADOR VS COMPUTADORA </h3>
        <div className="batalla">
          <h2 className="info"> {localStorage.getItem('userName')}  {contadorJug1}Pts </h2>
          <img className="imgBatalla" alt="arma jugador 1" src={armasImg[unArma.jugadorUno]} ></img>
          <div className="puntaje">
            <button 
              style={{
                  backgroundColor: colorBgndBtn.colorBackgorundBtn,
                  boxShadow: shadowBtn,
                  opacity: opacityBtn,
                  cursor: cursorBtn}}
              className="btnRevancha" 
              onClick={() => borrarSets()}>REVANCHA</button>
          </div>
              <img className="imgBatalla" alt= "arma computadora" src={armasImg[unArma.computadora]}></img>
              <h2 className="info">Computadora {contPc}{armasImg.computadora}Pts</h2>
        </div>
        <div className="containerBtn">
          <div className="responsive">
            <h2 className="info" >Elegi tu arma  <br/>{(localStorage.getItem('userName'))}</h2>
            
            <button className="btnToHome_" type="button" onClick={iraHome}>{'<'} VOLVER</button>
            <button className="restart" type="button"onClick={restarCount} >RESTABLECER PUNTAJE</button>
            <img id="myDIV1" alt="PIEDRA" title="PIEDRA" className="imgArma" src={armasImg[0]} onClick={() => elegirArmaJugador1 (0)}  ></img>
            <img id="myDIV2" alt="PAPEL" title="PAPEL" className="imgArma" src={armasImg[1]} onClick={() => elegirArmaJugador1 (1)} ></img>
            <img id="myDIV3" alt="TIJERA" title="TIJERA" className="imgArma" src={armasImg[2]} onClick={() => elegirArmaJugador1 (2)} ></img>
            <img id="myDIV4" alt="LAGARTO" title="LAGARTO" className="imgArma" src={armasImg[3]} onClick={() => elegirArmaJugador1 (3)} ></img>
            <img id="myDIV5" alt="SPOCK" title="SPOCK" className="imgArma" src={armasImg[4]} onClick={() => elegirArmaJugador1 (4)} ></img>
            <img id="myDIV6" alt="RANDOM" title="RANDOM" className="imgArma" src={armasImg[5]} onClick={() => elegirArmaJugador1 (elegirArmaRandom())} ></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Play;

