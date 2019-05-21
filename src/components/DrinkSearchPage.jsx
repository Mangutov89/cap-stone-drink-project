import React from 'react';
import DrinkSearch from './DrinkSearch';
import DrinkList from './DrinkList';
import v4 from 'uuid/v4';


class DrinkSearchPage extends React.Component {
  constructor(props) {
    super(props),
    this.state = {
      searchDrinkList: []
    }
    this.handleGetDrinksFromAPI = this.handleGetDrinksFromAPI.bind(this);
  }


  async handleGetDrinksFromAPI(searchTerm) {
    searchTerm = searchTerm.replace(' ', '_');
    let json;
    let drinkList = [...this.state.searchDrinkList]
    try {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/{process.env.API_KEY}/search.php?s={searchTerm}`);
      json = await response.json();
      console.log(json)
      for (var i = 0; i <= 9; i ++) {
        const name = json.drinks[i].strDrink;
        const ingredients = json.drinks[i].strIngredient1;

        drinkList.push({name, ingredients})
      }
    }
    catch(e) {
      console.log('An error occurred.', e)
    }
    this.setState({searchDrinkList: DrinkList});
    console.log("at end", this.state.searchDrinkList);
  }

  render() {
    return(
      <div>
        <DrinkSearch onGetDrinksFromAPI={this.handleGetDrinksFromAPI}/>
        <DrinkList drinkList= {this.state.searchDrinkList}/>
      </div>

    );
  }
}

export default DrinkSearchPage;
