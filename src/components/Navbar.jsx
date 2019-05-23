import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){

  const flexNavbar = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'black',
    color: 'white',
    fontFamily: 'Russo One'
  };

  const sideNav = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  };
  const marginRight = {
    marginRight: '25px'
  };
  const marginLeft = {
    marginLeft: '25px'
  };


  return (
    <div style={ flexNavbar }>
      <div style = { marginLeft }>
        <h1>Drink App</h1>
      </div>
      <div style = { sideNav }>

        <Link to="/about" style={marginRight}>ABOUT US</Link>
        <Link to="/create" style={marginRight}>CREATE A DRINK</Link>
        <Link to="/saved" style={marginRight}>YOUR SAVED DRINKS</Link>
      </div>
    </div>
  );
}

export default Navbar;
