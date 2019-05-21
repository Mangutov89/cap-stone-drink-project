import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Drink from './Drink';


function SavedDrinkFromAPI(props) {
  const drinkList = props.drinkList;
  console.log(drinkList);
  return(
    <div>
      <p>saved</p>
      {Object.keys(drinkList).map((drink, index) =>

        <Job title={drinkList[drink].title}
          company={drinkList[drink].company}
          description={drinkList[drink].description}
          location={drinkList[drink].location}
          website={drinkList[drink].website}
          id={drinkList[drink].id}
          key={index} />
      )}
    </div>
  );
}

SavedJobs.propTypes = {
  songList: PropTypes.object,
};

const mapStateToProps = state => {
  return {
    drinkList: state.drinksById
  };
};

export default connect(mapStateToProps)(SavedDrinkFromAPI);
