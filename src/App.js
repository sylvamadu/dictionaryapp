
import './App.scss';
import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from '../src/Hoc/Home';


function App(){

  return(
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route exact path={'/'} component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
