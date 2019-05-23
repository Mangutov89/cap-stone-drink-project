import React from 'react';
import NewDrink from './NewDrink';
import PropTypes from 'prop-types';

function NewDrinkList(props){
  return (
    <div>
      <hr/>
      {props.newMasterDrinkList.map((drink, index) =>
        <NewDrink name={drink.newName}
          ingredients={drink.ingredients}
          directions={drink.directions}
          key={index}/>
      )}
      <NewDrinkList/>
    </div>
  )
}

NewDrinkList.propTypes = {
  newMasterDrinkList: PropTypes.array
};

export default NewDrinkList;
