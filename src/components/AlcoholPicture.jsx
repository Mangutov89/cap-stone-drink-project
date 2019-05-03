import React from 'react';
import alc from '../assets/images/alc.jpg';

function AlcoholPicture(){
  const picture = {
    width: '100%',
    height: 'auto'
  }
  return (
    <div>
      <img style = { picture } src={ alc }/>
    </div>
  );
}

export default AlcoholPicture;
