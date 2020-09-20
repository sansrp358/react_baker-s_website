import React from 'react';

const Contact = () =>{
return(
    <>
        <div className="my-5">
            <h1 className="text-center"> Contact Us</h1>
            {/* <h3 className="text-center">Khulape Brother's</h3> */}
        </div>
        <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto">
                    
                            <div className="contact-info">
                                <div className="card_body">
                                    <i className="card-icon fas fa-phone"></i>
                                    <p>8888582391 </p>
                                </div>
                                <div className="card_body">
                                    <i className="card-icon fas fa-phone"></i>
                                    <p>8888582391 </p>
                                </div>
                                <div className="card_body">
                                    <i className="card-icon fas fa-phone"></i>
                                    <p>8888582391 </p>
                                </div>
                            </div>
                      
                </div>
             </div>
        </div>
        
    </>
);
};

export default Contact;