import React from 'react';

import { BrowserRouter as Router, Redirect, Switch, Route,useHistory } from 'react-router-dom';
import Play from '../Components/Play/Play';
import App from '../App';

  export default function Routes() {
    return (
        <Router>
            <Route exact path="/">
            <App/>
      </Route>
        
              <Route exact path="/Play">
          <Play />
        </Route>

      

    </Router>
  );
}
