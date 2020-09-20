import React from 'react';
import Mdata from './Mdata';
import Card from './Card';
const Service = () =>{
return(
    <>
    <div className="service_body">
        <div className="my-5">
            <h1 className="text-center text-light">Our Menu</h1>
        </div>        
        <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-4">
                        {
                            Mdata.map((val, ind)=>{
                                return <Card 
                                    key={ind}
                                    imgsrc={val.imgsrc}
                                    title ={val.title}
                                    h_p= {val.half_price}
                                    f_p={val.full_price}
                                />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
);
};

export default Service;