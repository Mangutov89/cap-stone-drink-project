import React from 'react';
import PropTypes from 'prop-types';

function CreateNewDrinkForm(props){

  let _name = null;
  let _ingredients = null;
  let _directions = null;

  function handleCreateNewDrinkFormSubmission(event) {
    event.preventDefault();
    props.onNewDrinkCreation({newName: _name.value, ingredients: _ingredients.value, directions: _directions.value});
    _name.value = '';
    _ingredients.value = '';
    _directions.value = '';
  }

  return (
    <div>
      <form onSubmit={handleCreateNewDrinkFormSubmission}>
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

CreateNewDrinkForm.propTypes = {
  onNewDrinkCreation: PropTypes.func
};

export default CreateNewDrinkForm;
