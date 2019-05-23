import React from 'react';
import Navbar from './Navbar';
import AlcoholPicture from './AlcoholPicture';
import DrinkSearch from './DrinkSearch';
import DrinkSearchPage from './DrinkSearchPage';
import SavedDrinksFromAPI from './SavedDrinksFromAPI';
import About from './About';
import DrinkList from './DrinkList';
import NewDrinkList from './NewDrinkList';
import CreateNewDrinkForm from './CreateNewDrinkForm';
import Error404 from './Error404';

import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
     masterDrinkList: [
       {
         name: 'mart'
       }
     ]
   };
   this.handleAddingNewDrinkToList = this.handleAddingNewDrinkToList.bind(this);
  }

  handleAddingNewDrinkToList(newDrink){
    let newDrinkId = v4();
    let newMasterDrinkList = Object.assign({}, this.state.masterDrinkList, {
      [newDrinkId]: newDrink
    });
    this.setState({masterDrinkList: newMasterDrinkList});
}

  render(){
    return (
      <div>
        <Navbar/>
        <AlcoholPicture/>
        <DrinkSearchPage/>
        <CreateNewDrinkForm/>
        <NewDrinkList newMasterDrinkList={this.state.masterDrinkList}/>

        {console.log(this.state.masterDrinkList)}
        <Switch>
          <Route exact path='/about' component= {About} />
          <Route path='/create' component= {CreateNewDrinkForm} />
          <Route path='/saved' component= {SavedDrinksFromAPI} />
          <Route path='/drinklist' component= {DrinkList} />
          <Route path='/newdrinkform' render={()=><CreateNewDrinkForm onNewDrinkCreation={this.handleAddingNewDrinkToList} />} />
          <Route path= '/newdrink' render={()=><NewDrinkList newMasterDrinkList={this.state.masterDrinkList} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
