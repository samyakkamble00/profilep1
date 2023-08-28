import React from 'react'
import Sty from './NavBar.module.css'
const NavBar = () => {
  return (
	<div  className={Sty.navBar}>
  
    <div className={Sty.ule}>
      <a href='#'>
        <div>Home</div>
      </a>
    </div >
    <div className={Sty.navBar}>
      <a href='#'>
        <div>About</div>
      </a>  
      <a href='#'>
        <div>Contact</div>
      </a>
      <a href='#'>
        <div>Certificate</div>
      </a>
      <a href='#'>
        <div>Project</div>
      </a>
      <a href='#'>
        <div>Dark Mode</div>
      </a>
    </div>


  </div>
  )
}

export default NavBar