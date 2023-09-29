import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../src/Logos.jpg'

const Navbar = () => {

    const navbarLinks = {
        textDecoration: 'none', 
        listStyle: 'none', 
        marginRight: '2rem',
        fontWeight: 'bolder',
        color: 'White',
        fontSize: '0.9em',
    }





  return (

    <nav className='Navbar-wrapper' style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', padding: '1em',background: '#272829'}}>
       {/* <a class="navbar-brand" to="javascript:void(0)">Logo</a> */}
       <div className="logo" style={{textDecoration: 'none', 
        listStyle: 'none', 
        marginRight: '1rem',
        fontWeight: 'bolder',
        color: 'White',
        fontSize: '1em',}}>GoFood</div>
        <ul style={{listStyle: 'none', textDecoration: 'none', display: 'flex', justifyContent: 'space-evenly', marginBottom: '0rem'}}>
        <li> <Link style = {navbarLinks} to="/">About Us</Link> </li>
        <li> <Link style = {navbarLinks} to="/">Contact Us</Link> </li>
        <li> <Link style = {navbarLinks} to="/Login">Login</Link> </li>

        </ul>


    </nav>
   
  )
}


export default Navbar;
