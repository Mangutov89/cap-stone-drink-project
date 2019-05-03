import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

function NewDrinkForm(props){

  let _name = null;
  let _ingredients = null;
  let _issue = null;

  function handleNewDrinkFormSubmission(event) {
    event.preventDefault();
    props.onNewDrinkCreation({name: _name.value, ingredients: _ingredients.value, issue: _issue.value, timeOpen: new Moment()});
    _name.value = '';
    _ingredients.value = '';
    _issue.value = '';
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
          id='issue'
          placeholder='Describe your issue.'
          ref={(textarea) => {_issue = textarea;}}/>
        <button type='submit'>Help!</button>
      </form>
    </div>
  );
}

// NewDrinkForm.propTypes = {
//   onNewDrinkCreation: PropTypes.func
// };

export default NewDrinkForm;
