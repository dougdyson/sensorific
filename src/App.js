import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Master from '../src/Components/Master/Master';
import Detail from '../src/Components/Detail/Detail';

import './App.css';

function App() {  
  return (
    <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Master} />
            <Route exact path="/details/:id" component={Detail} />
          </Switch>
        </div>
    </Router>
  )
}

export default App;




