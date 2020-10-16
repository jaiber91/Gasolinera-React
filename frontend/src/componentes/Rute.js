import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import FindStation from "../FindStation";
import App from '../App';
import Header from './Header';
function Rute(){
    return(
        <>
        
    <BrowserRouter>
         <Header>  
        </Header> 
        <Switch>
          <Route exact path="/" component={App}/>
          <Route exact path="/FindStation" component={FindStation}/>
      </Switch>
    </BrowserRouter>
      </>
    )
}

export default Rute;