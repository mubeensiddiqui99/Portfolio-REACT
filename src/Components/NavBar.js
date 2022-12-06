import React from 'react';
import logo from '../logo1.png';
import "../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
const NavBar = () => {
    return (
       <>
<nav className="navbar navbar-expand-lg navbar-light bg-success">
<div className="container">
  <a className="navbar-brand" href="#"><img className="logo1" src={logo} alt="ImageLoading" /></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon={faBars}/>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/aboutme">About me</a>
      </li>
      
       <li className="nav-item">
        <a className="nav-link" href="/projects">Projects</a>
      </li>
       <li className="nav-item">
        <a className="nav-link" href="services">Services</a>
      </li>
       <li className="nav-item">
        <a className="nav-link" href="/blogs">Blogs</a>
      </li>
       <li className="nav-item">
        <a className="nav-link" href="/contacts">Contacts</a>
      </li>
    <li>
      <a href="https://www.linkedin.com/in/muhammad-mubeen-siddiqui-102a6810b/" target="_blank"><button type="button" class="btn btn-info">LinkedIn</button></a>

    </li>
    </ul>
    
  </div>
  </div>
</nav>

       </>
    )
}

export default NavBar
