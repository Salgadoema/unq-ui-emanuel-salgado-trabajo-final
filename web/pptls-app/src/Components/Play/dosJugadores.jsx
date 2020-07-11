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



  const elegirArma = (arma) => {
    switch (statusBtn) {
        case 0:
            setStatusBtn(statusBtn + 1)
            setArma({jugadorUno:arma,jugadorDos:'6'})
            
            console.log("jugador1 eligio",unArma.jugadorUno)
        break
        case 1:
            setStatusBtn({setStatusBtn:0})
            deshabilitarBotones();
            
            console.log("jugador2 eligio",unArma.jugadorUno)
            const ganador = resultadoCombate(unArma.jugadorUno, arma);
            setArma({ jugadorUno: unArma.jugadorUno,jugadorDos: arma, ganador, })
            setArmaParaMostrar({ jugadorUno: unArma.jugadorUno,jugadorDos: arma})
            break
         default:
                console.log("statusBtn")
        
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
        break

      case 1:
        setColor({ colorBackgorund: 'green' });
        notify.show("GANASTE", "success", 1000, myColor);
        setContadorJ1(contadorJug1 + 1)
        return ("GANASTE");
        break
      case 2:
        setColor({ colorBackgorund: 'red' });
        notify.show("PERDISTE", "error", 1000, myColor);
        setContadorJ2(contadorJug2 + 1)
        return ("PERDISTE");
        break
        default:
                console.log("nada")
        
    }
  }
  let history = useHistory();
  function iraHome() {
      history.push("/");
  }

  return (

    <>
      <div className="container" style={{ backgroundColor: colorBgnd.colorBackgorund }} >
        <Notifications />
        <div className="batalla">


          <h2 className="info"> {localStorage.getItem('userName')}  {contadorJug1}Pts </h2>

          <img className="imgBatalla" src={armasImg[armaElegida.jugadorUno]} ></img>


          <div className="puntaje">

            <button style={{
              backgroundColor: colorBgndBtn.colorBackgorundBtn,
              boxShadow: shadowBtn,
              opacity: opacityBtn,
              cursor: cursorBtn
            }}
            className="btnRevancha" onClick={() => borrarSets()}>REVANCHA</button>


          </div>

          <img className="imgBatalla" src={armasImg[armaElegida.jugadorDos]}></img>
          <h2 className="info">Computadora {contadorJug2}{armasImg.jugadorDos}Pts</h2>
        </div>

        <div className="containerBtn">

          <div className="responsive">
            <h2 className="info" >Elegi tu arma</h2>
            <button className="btnToHome" type="button" onClick={iraHome}>Back to Home</button>
            <img id="myDIV1" title="PIEDRA" className="imgArma" src={armasImg[0]} onClick={() => elegirArma(0)}  ></img>
            <img id="myDIV2" title="PAPEL" className="imgArma" src={armasImg[1]} onClick={() => elegirArma(1)} ></img>
            <img id="myDIV3" title="TIJERA" className="imgArma" src={armasImg[2]} onClick={() => elegirArma(2)} ></img>
            <img id="myDIV4" title="LAGARTO" className="imgArma" src={armasImg[3]} onClick={() => elegirArma(3)} ></img>
            <img id="myDIV5" title="SPOCK" className="imgArma" src={armasImg[4]} onClick={() => elegirArma(4)} ></img>
            <img id="myDIV6" title="RANDOM" className="imgArma" src={armasImg[5]} onClick={() => elegirArma(elegirArmaRandom())} ></img>

          </div>
          
          <h1>{unArma.ganador}</h1>

        </div>
      </div>

    </>
  );
}



export default DosJugadores;