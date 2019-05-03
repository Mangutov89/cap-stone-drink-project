import React from 'react';
import PropTypes from 'prop-types';

function Drink(props){
  const drinkInformation =
    <div>
      <h2>{props.name}</h2>
      <h4>{props.ingredients}</h4>
      <h4>{props.directions}</h4>
      <hr/>
    </div>;
}

Drink.propTypes = {
  name: PropTypes.string.isRequired,
  ingredients: PropTypes.string.isRequired
  directions: PropTypes.string.isRequired
  // issue: PropTypes.string,
  // formattedWaitTime: PropTypes.string.isRequired,
  // currentRouterPath: PropTypes.string,
  // onDrinkSelection: PropTypes.func,
  // ticketId: PropTypes.string.isRequired
};

export default Drink;
