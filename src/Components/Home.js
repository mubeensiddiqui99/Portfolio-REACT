import React from 'react'
import Particles from 'react-particles-js';
import Typed from 'react-typed';
const Home = () => {
    return (
        <div>
            <Particles
            params={{
              particles: {
                number:
                {   
                    value:30,
                    density:{
                        enable:true,
                        value_area:900
                    }
                },
                shape:{
                  type:"circle",
                  stroke:{
                    width:6,
                    color:"#f9ab00"
                  }

                }
              }
            }}

        />
         <div className="header-wraper">
        <div className="topRight">

                    <img className="topImage"
                     src="https://media-exp1.licdn.com/dms/image/C5603AQH2BYNs3BnfqQ/profile-displayphoto-shrink_800_800/0/1625731799419?e=1633564800&v=beta&t=j0dy3ENErGhRsnQ_SiqvLXANZc-RANZTnre6elXiTyc" 
                     alt="NotFound" />
                    <i className="TopsearchIcon fas fa-search"></i>

                </div>
       <div className="main-info">
            <h1>Web Development and websites promotion</h1>
                <Typed
                    style={{color:"black"}}
                    className="typed-text"
                    strings={["Web Design","Front-End Web Development","Mobile Apps","WordPress","ReactJs"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop

                />
                <a href="/contacts"><button type="button" className="btn btn-warning p-auto">Contact me</button></a>
                
       </div>




       </div>
        </div>
    )
}

export default Home
