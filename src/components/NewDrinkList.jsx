import React from 'react';
import NewDrink from './NewDrink';
import PropTypes from 'prop-types';

function NewDrinkList(props){
  return (
    <div>
      <hr/>
      {console.log(props.newMasterDrinkList)}
      
    </div>
  )
}

NewDrinkList.propTypes = {
  newMasterDrinkList: PropTypes.array
};

export default NewDrinkList;
