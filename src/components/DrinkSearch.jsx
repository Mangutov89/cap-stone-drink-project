import React from 'react';


function DrinkSearch(props){
  let input;
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        props.onGetDrinksFromAPI(input.value.trim());
        input.value = '';
      }}>
        <input placeholder="drink search" ref={node => {
          input = node;
        }}></input>
        <button>Search</button>
      </form>

    </div>
  );
}



export default DrinkSearch;
