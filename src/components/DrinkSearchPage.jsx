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
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/${process.env.API_KEY}/search.php?s=${searchTerm}`);
      json = await response.json();
      console.log(json)
      for (var i = 0; i <= 9; i ++) {
        const name = json.drinks[i].strDrink;
        const image = json.drinks[i].strDrinkThumb;
        const id = json.drinks[i].idDrink;
        const ingredient1 = json.drinks[i].strIngredient1;
        const ingredient2 = json.drinks[i].strIngredient2;
        const ingredient3 = json.drinks[i].strIngredient3;
        const ingredient4 = json.drinks[i].strIngredient4;
        const ingredient5 = json.drinks[i].strIngredient5;
        const ingredient6 = json.drinks[i].strIngredient6;
        const measurement1 = json.drinks[i].strMeasure1;
        const measurement2 = json.drinks[i].strMeasure2;
        const measurement3 = json.drinks[i].strMeasure3;
        const measurement4 = json.drinks[i].strMeasure4;
        const measurement5 = json.drinks[i].strMeasure5;
        const measurement6 = json.drinks[i].strMeasure6;
        const instructions = json.drinks[i].strInstructions;
        drinkList.push({name, image, id, ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, measurement1, measurement2, measurement3, measurement4, measurement5, measurement6, instructions})
      }
    }
    catch(e) {
      console.log('An error occurred.', e)
    }
    this.setState({searchDrinkList: drinkList});
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
