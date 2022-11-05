import React from 'react';
import {NavLink} from 'react-router-dom';
import './BadUrl.css';

export const BadUrl = () => {
  return (
    <section className="bad-url">
      <h2>Uh oh, that's not a valid URL!</h2>
      <img 
        className="bad-url-img"
        src="https://media.giphy.com/media/kspVl6FzbdblOMKRmM/giphy.gif"
        alt="This is fine dog sitting in a fire in his apartment, drinking coffee"
      />
      <h3>Head on <NavLink className='inactive' exact to="/home">home</NavLink> or try a different address.</h3>
    </section>
  )
}