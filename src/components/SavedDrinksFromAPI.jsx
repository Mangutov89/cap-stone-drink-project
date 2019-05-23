import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Drink from './Drink';


function SavedDrinksFromAPI(props) {
  const drinkList = props.drinkList;
  console.log(drinkList);
  return(
    <div>
      <h1>Your Saves Drink Recipes</h1>
      {Object.keys(drinkList).map((drink, index) =>

        <Drink name={drinkList[drink].name}
          image={drinkList[drink].image}
          id={drinkList[drink].id}
          ingredient1={drinkList[drink].ingredient1}
          ingredient2={drinkList[drink].ingredient2}
          ingredient3={drinkList[drink].ingredient3}
          ingredient4={drinkList[drink].ingredient4}
          ingredient5={drinkList[drink].ingredient5}
          ingredient6={drinkList[drink].ingredient6}
          measurement1={drinkList[drink].measurement1}
          measurement2={drinkList[drink].measurement2}
          measurement3={drinkList[drink].measurement3}
          measurement4={drinkList[drink].measurement4}
          measurement5={drinkList[drink].measurement5}
          measurement6={drinkList[drink].measurement6}
          instructions={drinkList[drink].instructions}
          key={index} />
      )}
    </div>
  );
}


const mapStateToProps = state => {
  return {
    drinkList: state.drinksById
  };
};

export default connect(mapStateToProps)(SavedDrinksFromAPI);
