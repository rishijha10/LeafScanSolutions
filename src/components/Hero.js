import React from 'react'
import classes from './Hero.module.css'
import img from '../assets/hero.png'

const Hero = () => {
  return (
    <div className={classes.container}>
        <div>
            <img src={img}/>
        </div>
        <div></div>
    </div>
  )
}

export default Hero