import React from 'react';
import Drink from './Drink';
import PropTypes from 'prop-types';



function DrinkList(props) {
  return (
    <div>
      {props.drinkList.map((drink, index) =>
        <Drink name={drink.name}
          ingredients={drink.ingredients}
          id={drink.id}
          key={index} />
      )}
    </div>
  );
}

DrinkList.propTypes = {
  drinkList: PropTypes.array
};

export default DrinkList;
