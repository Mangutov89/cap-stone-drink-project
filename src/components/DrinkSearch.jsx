import React from 'react';
import PropTypes from 'prop-types';

function DrinkSearch(props){

  let _search = null;

  function handleDrinkSearchSubmission(event) {
    event.preventDefault();
    props.onNewDrinkCreation({search: _search.value});
    _search.value = '';
  }

  return (
    <div>
      <form onSubmit={handleDrinkSearchSubmission}>
        <input
          type='text'
          id='search'
          placeholder='Search for a drink'
          ref={(input) => {_search = input;}}/>
        <button type='submit'>Search</button>
      </form>
    </div>
  );
}

// DrinkSearch.propTypes = {
//   onNewDrinkCreation: PropTypes.func
// };

export default DrinkSearch;
