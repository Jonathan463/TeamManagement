import React from 'react';
import backgroundImg from './bg-tablet-pattern.svg';

const Body = () =>{
  return(
    <section className="body-content" styles = {{backgroungImage:`url(${backgroundImg})`}}>
      <div></div>
    </section>
  );
}
export default Body