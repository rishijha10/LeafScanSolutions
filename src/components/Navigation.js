import React from 'react'
import classes from './Navigation.module.css'

const Navbar = () => {
  return (
    <nav className={classes.container}>
        <h1>LeafScanSolutions</h1>
        <ul className={classes.navbar}>
            <li>DiseaseID</li>
            <li>PlantID</li>
            <li>Blog</li>
            <button>Sign In</button>
        </ul>
    </nav>
  )
}

export default Navbar