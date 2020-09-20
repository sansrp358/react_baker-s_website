import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/images/chef.png";
const Common = (props) =>{
return(
    <>
       <section id="header" className="d-flex align-items-center">
            <div className="container-fluid">
              <div className="row">
                <div className="col-10 mx-auto">
                   <div className="row">
                   <div className="col-lg-6 order-1 order-lg-2 header_img p-5 d-flex justify-content-center">
                        <img src={props.imgsrc} className="img-fluid animated" alt="cake" width={225} height={300} />
                    </div>
                   
                    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                        <h1><strong className="brand_name pt-4">The Golden Baker's</strong></h1>
                        <h2 className="my-3">
                       {props.name}
                          
                        </h2>
                        <div className="mt-3">
                            <NavLink to={props.visit} className="btn-get-started">{props.btnname}</NavLink>
                        </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
       </section>
    </>
);
};

export default Common;