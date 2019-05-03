import React from 'react';
import Drink from './Drink';
// import PropTypes from 'prop-types';



function DrinkList(props) {
  return (
    <div>
      <Drink/>
      <hr/>
      // {Object.keys(props.ticketList).map(function(ticketId) {
      //   let ticket = props.ticketList[ticketId];
      //   return <Drink names={ticket.names}
      //     location={ticket.location}
      //     issue={ticket.issue}
      //     formattedWaitTime={ticket.formattedWaitTime}
      //     currentRouterPath={props.currentRouterPath}
      //     key={ticketId}
      //     ticketId={ticketId}
      //     onDrinkSelection={props.onDrinkSelection}/>
      })}
    </div>
  );
}

// DrinkList.propTypes = {
//   ticketList: PropTypes.object,
//   currentRouterPath: PropTypes.string,
//   onDrinkSelection: PropTypes.func
// };

export default DrinkList;
