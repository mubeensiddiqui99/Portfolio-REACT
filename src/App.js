
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './Components/Home';
import "bootstrap/dist/js/bootstrap.bundle.min.js.map";
import NavBar from './Components/NavBar';
import Header from './Components/Header';
import Links from './Components/Links';
import Projects from './Components/Projects';
import Aboutme from './Components/Aboutme';
import Contact from './Components/Contact';
import Services from './Components/Services';
import {BrowserRouter as Router,Link,Route,Redirect} from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Blog from './Components/Blog';
import Footer from './Components/Footer';
import ReactGa from 'react-ga';
import React, { useState, useEffect } from 'react';
import {withRouter} from 'react-router-dom';


function App() {
  
 useEffect(()=>{
ReactGa.initialize('UA-208995419-1');
  console.log('error');
  ReactGa.pageview(window.location.pathname + window.location.search);
  console.log('error1');
 },[]);
  
  return (
    <>
        
    <NavBar/>
    
   
         <Router>

        
        <Switch>
            <Route exact path="/" component={Home} /> 
            <Route exact path="/aboutme" component={Aboutme} /> 
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/blogs" component={Blog} />
            <Route exact path="/contacts" component={Contact} />
            <Route exact path="/links" component={Links} />
            
           
        </Switch>
    </Router>
  
   <Footer/>
        
    </>
  );
}

export default App;
