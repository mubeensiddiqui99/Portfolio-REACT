
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';
import React , { Fragment } from 'react';
import "./Footer.css"
const Footer = () => {
    return (
        <>
        <Fragment>
        <div className="footer">
    <Navbar className="bg-dark"> 
        <Nav className="m-auto py-5" >
            <Nav.Link to="/privacy" className="nav-link" style={{color:"white"}}>
                Privacy
            </Nav.Link>
            <Nav.Link to="/terms" className="nav-link" style={{color:"white"}}>
                Terms &amp; Conditions
            </Nav.Link>
            <Nav.Link to="/policy" className="nav-link" style={{color:"white"}}>
                Policy
            </Nav.Link>
             <Nav.Link to="" className="nav-link" style={{color:"white"}}>
                 Email:mubeensddiqui1276@gmail.com
            </Nav.Link>
            <Nav.Link to="" className="nav-link" style={{color:"white"}}>
                © 2021 Copyright | Mubeen Siddiqui
            </Nav.Link>
        
              
            
           
        </Nav>
    </Navbar>
    </div>
    </Fragment>
    </>
    )
}

export default Footer
