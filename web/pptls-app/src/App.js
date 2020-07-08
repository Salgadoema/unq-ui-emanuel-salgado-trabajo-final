import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useHistory} from 'react-router-dom';
import piedra from './Static/piedra.png'
import papel from './Static/papel.png'
import tijera from './Static/tijera.png'
import lagarto from './Static/lagarto.png'
import spock from './Static/spock.png'
import {Button } from 'react-bootstrap';

function App() {
  let history = useHistory();

  function toPlay() { history.push("/Play")}
  
  return (
 
    <div className="App">
            <div className="row">
            <div className="column">
                 <h1 className="title2"> P </h1>
<<<<<<< HEAD
                 <img className="App-logo" src={piedra}/>
            </div>
            <div class="column">
                 <h1 className="title2"> P </h1>
                 <img className="App-logo"src={papel} />
            </div>
            <div class="column">
                 <h1 className="title2"> T </h1>
                 <img className="App-logo"src={tijera}  />
            </div>
            <div class="column">
                 <h1 className="title2"> L </h1>
                 <img className="App-logo" src={lagarto} />
            </div>
            <div class="column">
                 <h1 className="title2"> S </h1>
                 <img className="App-logo" src={spock} />
=======
                 <img src={piedra}/>
            </div>
            <div class="column">
                 <h1 className="title2"> P </h1>
                 <img src={papel} />
            </div>
            <div class="column">
                 <h1 className="title2"> T </h1>
                 <img src={tijera}  />
            </div>
            <div class="column">
                 <h1 className="title2"> L </h1>
                 <img src={lagarto} />
            </div>
            <div class="column">
                 <h1 className="title2"> S </h1>
                 <img src={spock} />
>>>>>>> e0dff4f54e48a937b34939871df2502f3e2dd3ad
            </div>
          </div>
          
          <div class="column">
         
          <Button className="btnPlay" onClick={()=>toPlay()} variant="primary">Comenzar</Button>
            </div>
    </div>

  );
}

export default App;
