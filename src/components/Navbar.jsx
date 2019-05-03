import React from 'react';
// import { Link } from 'react-router-dom';

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
  const linkStyle = {
    color: 'white',
    fontFamily: 'monospace',
    textDecoration: 'none'
  };

  return (
    <div style={ flexNavbar }>
      <div style = { marginLeft }>
        <h1>PDX Beerly Bar</h1>
      </div>
      <div style = { sideNav }>
        // <Link to = "/" style = { marginRight, linkStyle }>ABOUT US</Link>
        <h1 style = { marginRight }>RECOMMEND A BEER</h1>
      </div>
    </div>
  );
}

export default Navbar;
