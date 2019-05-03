import React from 'react';
import nonalc from '../assets/images/nonalc.jpg';

function NonAlcoholPicture(){
  const picture = {
    width: '100%',
    height: 'auto'
  }
  return (
    <div>
      <img style = { picture } src={ nonalc }/>
    </div>
  );
}

export default NonAlcoholPicture;
