import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useHistory} from 'react-router-dom';

import {Button } from 'react-bootstrap';

function App() {
  let history = useHistory();

  function toPlay() { history.push("/Play")}
  
  return (
 
    <div className="App">
            <div className="row">
            <div className="column">
                 <h1 className="title2"> P </h1>
                 <img src={logo}/>
            </div>
            <div class="column">
                 <h1 className="title2"> P </h1>
                 <img src={logo} />
            </div>
            <div class="column">
                 <h1 className="title2"> T </h1>
                 <img src={logo}  />
            </div>
            <div class="column">
                 <h1 className="title2"> L </h1>
                 <img src={logo} />
            </div>
            <div class="column">
                 <h1 className="title2"> S </h1>
                 <img src={logo} />
            </div>
          </div>
          
          <div class="column">
         
          <Button className="btnPlay" onClick={()=>toPlay()} variant="primary">Comenzar</Button>
            </div>
    </div>

  );
}

export default App;
