import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveDrink } from './../actions';

function Drink(props){

  const drink = {
    name: props.name,
    ingredients: props.ingredients,
    directions: props.directions,
    id: props.id
  }
  return (
    <div>
      <h2>{props.name}</h2>
      <h4>{props.ingredients}</h4>
      <h4>{props.directions}</h4>
      <button onClick={ e => {
          e.preventDefault();
          props.dispatch(saveDrink(drink));}
        }>Save this Drink</button>
        <hr/>
      </div>;
  )
}

Drink.propTypes = {
  name: PropTypes.string.isRequired,
  ingredients: PropTypes.string.isRequired,
  directions: PropTypes.string.isRequired,
  dispatch: PropTypes.func
  // issue: PropTypes.string,
  // formattedWaitTime: PropTypes.string.isRequired,
  // currentRouterPath: PropTypes.string,
  // onDrinkSelection: PropTypes.func,
  // ticketId: PropTypes.string.isRequired
};

export default connect()(Drink);
