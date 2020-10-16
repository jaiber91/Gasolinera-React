import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import FindStation from "../FindStation";
import App from '../App';
import Header from './Header';
import TopStation from '../topStation';
function Rute(){
    return(
        <>
        
    <BrowserRouter>
         <Header>  
        </Header> 
        <Switch>
          <Route exact path="/" component={App}/>
          <Route exact path="/FindStation" component={FindStation}/>
          <Route exact path="/topStation" component={TopStation}/>
      </Switch>
    </BrowserRouter>
      </>
    )
}

export default Rute;