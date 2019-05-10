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
      <form onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        props.onGetJobsFromAPI(input.value.trim());
        input.value = '';
      }}>
        <input placeholder="job search" ref={node => {
          input = node;
        }}></input>
        <button>Search</button>
      </form>

    </div>
  );
}

// DrinkSearch.propTypes = {
//   onNewDrinkCreation: PropTypes.func
// };

export default DrinkSearch;
