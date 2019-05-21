import React from 'react';
import Navbar from './Navbar';
import AlcoholPicture from './AlcoholPicture';
import DrinkSearch from './DrinkSearch';
import Results from './Results';
import About from './About';
import DrinkList from './DrinkList';
import CreateNewDrinkForm from './CreateNewDrinkForm';
import Error404 from './Error404';

import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <Navbar/>
      <AlcoholPicture/>
      <DrinkSearch/>
      <Results/>

      <Switch>
        <Route exact path='/about' component= {About} />
        <Route path='/results' component= {Results} />
        <Route path='/create' component= {CreateNewDrinkForm} />
        <Route path='/drinklist' component= {DrinkList} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
