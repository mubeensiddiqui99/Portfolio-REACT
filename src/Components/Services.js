import React from 'react'
import './Services.css';


const Services = () => {
    
    return (
        <div className="service-wraper">
             <div className="row gy-2">
                            <div className="col-md-4 col-10 mx-auto">
                                <div class="card" >
                                    <img src="https://www.unitxsol.com/wp-content/uploads/2020/07/develop-and-fix-reactjs-web-application.jpg" className="card-img-top" alt="..."/>
                                        <div className="card-body">
                                            <h5 className="card-title font-weight-bold"> Front-End Web Development</h5>
                                        <p className="card-text">we use ReactJs to do dynamic frontend work </p>
                                            <a href="/links" className="btn btn-primary">My Work</a>
                                        </div>

                                </div>

                                </div>


                                <div className="col-md-4 col-10 mx-auto">
                                <div className="card" >
                                    <img src="https://mk0testdemonsitv8fjd.kinstacdn.com/wp-content/uploads/2019/05/wordpress.gif" className="card-img-top" alt="..."/>
                                        <div className="card-body">
                                            <h5 className="card-title font-weight-bold">WordPress</h5>
                                        <p className="card-text">we also use WordPress to make eye-catching websites</p>
                                            <a href="#" class="btn btn-primary">My Work</a>
                                        </div>

                                </div>

                                </div>
</div>

        </div>
    )
}

export default Services
