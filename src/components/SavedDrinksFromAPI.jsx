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
          ingredients={drinkList[drink].ingredients}
          id={drinkList[drink].id}
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
