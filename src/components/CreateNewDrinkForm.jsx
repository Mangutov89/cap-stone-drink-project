import React from 'react';
import PropTypes from 'prop-types';

function CreateNewDrinkForm(props){

  let _name = null;
  let _ingredients = null;
  let _directions = null;

  function handleCreateNewDrinkFormSubmission(event) {
    event.preventDefault();
    props.onCreateNewDrinkCreation({newName: _name.value, ingredients: _ingredients.value, directions: _directions.value});
    _name.value = '';
    _ingredients.value = '';
    _directions.value = '';
  }

  return (
    <div>
    <h1>If you cant find you drink, you can make your own recipe here, but you must create and account to do so.</h1>
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
  onCreateNewDrinkCreation: PropTypes.func
};

export default CreateNewDrinkForm;
