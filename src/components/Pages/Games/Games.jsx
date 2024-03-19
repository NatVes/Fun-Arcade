import React from 'react';
import Header from './Header/Header'; 
import Body from './Body/Body'; 

export default function Games() {
  return (
    <>
      <Header />
      <div className='container games col-lg-10 col-xl-12'>
        <Body />
      </div>
      
    </>
  );
}