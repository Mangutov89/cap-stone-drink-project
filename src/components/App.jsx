import React from 'react';
import Navbar from './Navbar';

import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route exact path='/about' component= {About} />
        <Route exact path='/results' component= {Results} />
        <Route exact path='/create' component= {CreateNewDrinkForm} />
        <Route exact path='/drinklist' component= {DrinkList} />
      </Switch>
    </div>
  );
}

export default App;
