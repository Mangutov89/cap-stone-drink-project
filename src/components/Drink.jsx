import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveDrink } from './../actions';

function Drink(props){

  const drink = {
    name: props.name,
    image: props.image,
    id: props.id,
    ingredient1: props.ingredient1,
    ingredient2: props.ingredient2,
    ingredient3: props.ingredient3,
    ingredient4: props.ingredient4,
    ingredient5: props.ingredient5,
    ingredient6: props.ingredient6,
    measurement1: props.measurement1,
    measurement2: props.measurement2,
    measurement3: props.measurement3,
    measurement4: props.measurement4,
    measurement5: props.measurement5,
    measurement6: props.measurement6,
    instructions: props.instructions
  }
  return (
    <div>
      <style jsx>{`
          img {
            float: left;
            height: 300px;
            width: 300px;
            margin-right: 25px;
          }
        `}</style>
      <h2>{props.name}</h2>
      <img src={props.image}></img>
      <h4>{props.ingredient1} - {props.measurement1}</h4>
      <h4>{props.ingredient2} - {props.measurement2}</h4>
      <h4>{props.ingredient3} - {props.measurement3}</h4>
      <h4>{props.ingredient4} - {props.measurement4}</h4>
      <h4>{props.ingredient5} - {props.measurement5}</h4>
      <h4>{props.ingredient6} - {props.measurement6}</h4>
      <p>{props.instructions}</p>

      <button onClick={ e => {
          e.preventDefault();
          props.dispatch(saveDrink(drink));}
        }>Save this Drink</button>
        <hr/>
      </div>
  )
}

Drink.propTypes = {
  name: PropTypes.string.isRequired,
  ingredients: PropTypes.string.isRequired,
  directions: PropTypes.string.isRequired,
  dispatch: PropTypes.func
};

export default connect()(Drink);
