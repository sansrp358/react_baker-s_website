import React from 'react';
import web from '../src/images/a.png'
import {NavLink} from 'react-router-dom';

const Card = (props) =>{
return(
    <>
                        <div className="col-md-4 col-10 mx-auto">
                            <div className="card menu">
                                <img 
                                src={props.imgsrc} className="card-img-top" alt={props.imgsrc} width={253.84} height={253.84} />
                                <div className="card-body">
                                    <h5 className="card-title font-weight-bold text-center">{props.title}</h5>
                                    {/* <p className="card-text text-center">{props.h_p}</p>
                                    <p className="card-text text-center">{props.f_p}</p>
                                    */}
                                </div>
                            </div>
                        </div>
              
    </>
);
};

export default Card;