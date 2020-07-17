import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Notifications, { notify } from 'react-notify-toast';
import piedra from '../../Static/piedra.png'
import papel from '../../Static/papel.png'
import tijera from '../../Static/tijera.png'
import lagarto from '../../Static/lagarto.png'
import spock from '../../Static/spock.png'
import random from '../../Static/randomSelection.gif'
import ninguno from '../../Static/ninguno.png'


function DosJugadores () {
  

   const armas = ["piedra", "papel", "tijera", "lagarto", "spock"];
   const [contadorJug1, setContadorJ1] = useState(0)
  const [contadorJug2, setContadorJ2] = useState(0)
  const [colorBgndBtn, setColorBtn] = useState({ colorBackgorundBtn: 'violet' });
  const [shadowBtn, setShadowBtn] = useState('')
  const [colorBgnd, setColor] = useState({ colorBackgorund: 'violet' });
  const [opacityBtn, setOpacity] = useState('0.1')
  const [cursorBtn, setCursor] = useState('not-allowed')
  const armasImg = [piedra, papel, tijera, lagarto, spock, random, ninguno]
  const [unArma, setArma] = useState({ jugadorUno: "6", jugadorDos: "6", ganador: "" })
  const [armaElegida, setArmaParaMostrar] = useState({ jugadorUno: "6", jugadorDos: "6"})
  let myColor = { background: '#0E1717', text: "#FFFFFF" };
  const [statusBtn, setStatusBtn] = useState(0);
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



  const elegirArmaAmbosJugadores = (arma) => {

    switch (statusBtn) {
        case 0:
            setStatusBtn(statusBtn + 1)
            setArma({jugadorUno:arma,jugadorDos:'6'})
        break
        case 1:
            setStatusBtn({setStatusBtn:0})
            deshabilitarBotones();
            const ganador = resultadoCombate(unArma.jugadorUno, arma);
            setArma({ jugadorUno: unArma.jugadorUno,jugadorDos: arma, ganador })
            setArmaParaMostrar({ jugadorUno: unArma.jugadorUno,jugadorDos: arma})
            break
         default:
            notify.show ("TOCA REVANCHA PARA JUGAR OTRA PARTIDA","warning",2000,'RED')
            break
        
        }
    } 
 
    const deshabilitarRevancha = () => {
    setColorBtn({ colorBackgorundBtn: 'violet' });
    setShadowBtn('')
    setStatusBtn(0)
    setOpacity('0.1')
    setCursor('not-allowed')
  }
  const borrarSets = () => {
    setArmaParaMostrar({ jugadorUno: "6", jugadorDos: "6" })
    setArma({ jugadorUno: "6", jugadorDos: "6", ganador: "" })
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

    function resultadoCombate  (arma1, arma2)  {

        const resultado = jugada[arma2][arma1];
        setColorBtn({ colorBackgorundBtn: colorBgnd.colorBackgorund });
        setOpacity('1')
        setCursor('pointer')
        setShadowBtn(' 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)')
        switch (resultado) {
          case 0:
            setColor({ colorBackgorund: 'cornflowerblue' });
            notify.show("EMPATARON", "info", 2000, myColor);

            break
          case 1:
            setColor({ colorBackgorund: 'green' });
            notify.show('Gano '+localStorage.getItem('userName'), "success", 2000, myColor);
            setContadorJ1(contadorJug1 + 1)

            break
          case 2:
            setColor({ colorBackgorund: 'red' });
            notify.show('GANO '+localStorage.getItem('userName2'), "error", 2000, myColor);
            setContadorJ2(contadorJug2 + 1)
            break
            default:
              break
      
        }
      }


function restarCount(){
    setContadorJ1(0)
    setContadorJ2(0)
}
  
  let history = useHistory();
  function iraHome() {
      history.push("/");
  }
  function turnoJugador(){
    switch (statusBtn) {
        case 0:
      
            return (localStorage.getItem('userName'));
        case 1:
         
            return (localStorage.getItem('userName2'));
            
         default:
               break
        
        }
  }/**/

  return (

    <>
    <Notifications />
      <div className="container" style={{ backgroundColor: colorBgnd.colorBackgorund }} >
      <h3>2 JUGADORES </h3>
        <div className="batalla">
           <h2 className="info"> {localStorage.getItem('userName')}  {contadorJug1}Pts </h2>
           <img alt= "arma elegida" className="imgBatalla" src={armasImg[armaElegida.jugadorUno]} ></img>
            <div className="puntaje">
                <button 
                    style={{
                        backgroundColor: colorBgndBtn.colorBackgorundBtn,
                        boxShadow: shadowBtn,
                        opacity: opacityBtn,
                        cursor: cursorBtn}}
                    className="btnRevancha" 
                    onClick={() => borrarSets()}>REVANCHA
                </button>
           </div>
           <img className="imgBatalla" alt="arma jugador 2" src={armasImg[armaElegida.jugadorDos]}></img>
           <h2 className="info"> {localStorage.getItem('userName2')} {contadorJug2}{armasImg.jugadorDos}Pts</h2>
      </div>
      <div className="containerBtn">
            <div className="responsive">
                <h2 className="info" >Elegi tu arma  <br/> {turnoJugador()}</h2>
                <button className="btnToHome_" type="button" onClick={iraHome}>{'<'} VOLVER</button>
                <button className="restart" type="button"onClick={restarCount} > RESTABLECER PUNTAJE</button>
                <img id="myDIV1" alt="PIEDRA" title="PIEDRA" className="imgArma" src={armasImg[0]} onClick={() => elegirArmaAmbosJugadores(0)}  ></img>
                <img id="myDIV2" alt="PAPEL" title="PAPEL" className="imgArma" src={armasImg[1]} onClick={() => elegirArmaAmbosJugadores(1)} ></img>
                <img id="myDIV3" alt="TIJERA" title="TIJERA" className="imgArma" src={armasImg[2]} onClick={() => elegirArmaAmbosJugadores(2)} ></img>
                <img id="myDIV4" alt="LAGARTO" title="LAGARTO" className="imgArma" src={armasImg[3]} onClick={() => elegirArmaAmbosJugadores(3)} ></img>
                <img id="myDIV5" alt="SPOCK" title="SPOCK" className="imgArma" src={armasImg[4]} onClick={() => elegirArmaAmbosJugadores(4)} ></img>
                <img id="myDIV6" alt="RANDOM" title="RANDOM" className="imgArma" src={armasImg[5]} onClick={() => elegirArmaAmbosJugadores(elegirArmaRandom())} ></img>
          </div>

        </div>
      </div>

    </>
  );
}

export default DosJugadores;
