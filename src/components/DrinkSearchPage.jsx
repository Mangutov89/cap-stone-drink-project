import React from 'react';
import DrinkSearch from './DrinkSearch';
import DrinkDisplay from './DrinkDisplay';
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
      const response = await fetch(`https://api.adzuna.com:443/v1/api/jobs/us/search/1?app_id=${process.env.API_ID}&app_key=${process.env.API_KEY}&what=${searchTerm}`);
      json = await response.json();
      console.log(json)
      for (var i = 0; i <= 9; i ++) {
        const name = json.results[i].company.display_name;
        const ingredients = json.results[i].title;

        drinkList.push({company, title})
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
        <DrinkDisplay drinkList= {this.state.searchDrinkList}/>
      </div>

    );
  }
}

export default DrinkSearchPage;
