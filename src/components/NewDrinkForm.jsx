import React from 'react';
import PropTypes from 'prop-types';

function NewDrinkForm(props){

  let _name = null;
  let _ingredients = null;
  let _directions = null;

  function handleNewDrinkFormSubmission(event) {
    event.preventDefault();
    props.onNewDrinkCreation({name: _name.value, ingredients: _ingredients.value, directions: _directions.value});
    _name.value = '';
    _ingredients.value = '';
    _directions.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewDrinkFormSubmission}>
        <input
          type='text'
          id='name'
          placeholder='Enter Drink name'
          ref={(input) => {_name = input;}}/>
        <input
          type='text'
          id='ingredients'
          placeholder='Ingredients'
          ref={(input) => {_ingredients = input;}}/>
        <textarea
          id='directions'
          placeholder='Enter step by step directions'
          ref={(textarea) => {_directions = textarea;}}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

// NewDrinkForm.propTypes = {
//   onNewDrinkCreation: PropTypes.func
// };

export default NewDrinkForm;
