import React from 'react';
import PropTypes from "prop-types";


function NewDrink(props){
  return (

    <div>
      <div>
        <h3>{props.newName}</h3>
        <h3>{props.ingredients}</h3>
        <h3>{props.directions}</h3>

      </div>
    </div>
  )
}

NewDrink.propTypes = {
  newName: PropTypes.string,
  ingredients: PropTypes.string,
  directions: PropTypes.string
};

export default NewDrink;
