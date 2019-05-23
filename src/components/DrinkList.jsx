import React from 'react';
import Drink from './Drink';
import PropTypes from 'prop-types';



function DrinkList(props) {
  return (
    <div>
      {props.drinkList.map((drink, index) =>
        <Drink name={drink.name}
          image={drink.image}
          id={drink.id}
          ingredient1={drink.ingredient1}
          ingredient2={drink.ingredient2}
          ingredient3={drink.ingredient3}
          ingredient4={drink.ingredient4}
          ingredient5={drink.ingredient5}
          ingredient6={drink.ingredient6}
          measurement1={drink.measurement1}
          measurement2={drink.measurement2}
          measurement3={drink.measurement3}
          measurement4={drink.measurement4}
          measurement5={drink.measurement5}
          measurement6={drink.measurement6}
          instructions={drink.instructions}
          key={index} />
      )}
    </div>
  );
}

DrinkList.propTypes = {
  drinkList: PropTypes.array
};

export default DrinkList;
