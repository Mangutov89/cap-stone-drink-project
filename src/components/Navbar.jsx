import React from 'react';


function Navbar(){

  const flexNavbar = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'black',
    color: 'white',
    fontFamily: 'monospace'
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
        <h1 style = { marginRight }>Log In</h1>
        <h1 style = { marginRight }>About Us</h1>
        <h1 style = { marginRight }>Create a Drink</h1>
        <h1 style = { marginRight }>Your Favorite Drinks</h1>
        <h1 style = { marginRight }>Shop</h1>
      </div>
    </div>
  );
}

export default Navbar;
