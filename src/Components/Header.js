import React from 'react';
import Typed from 'react-typed';
const Header = () => {
    return (
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
                    className="typed-text"
                    strings={["web Design","Web Development","Facebook Ads","Google Ads"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop

                />
                <a href="/contacts" className="btn-main-offer">Contact me</a>
                
       </div>




       </div>
    )
}

export default Header
