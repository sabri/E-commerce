import React from 'react';
 import {Row} from 'react-bootstrap'
const Cartcols = () => {
    return (
        <div className="container-fluid text-center d-none d-lg-block">
            <Row style={{color:"darkgray",fontStyle:"bold"}}>
<div className="col-10 mx-auto col-lg-2"> <p className="text-uppercase"><b> Products</b></p></div>
<div className="col-10 mx-auto col-lg-2"> <p className="text-uppercase"> <b>Name of Product</b></p></div>
<div className="col-10 mx-auto col-lg-2"> <p className="text-uppercase"> <b>Price</b></p></div>
<div className="col-10 mx-auto col-lg-2"> <p className="text-uppercase"> <b>Quantity</b></p></div>
<div className="col-10 mx-auto col-lg-2"> <p className="text-uppercase"><b>Remove</b> </p></div>
<div className="col-10 mx-auto col-lg-2"> <p className="text-uppercase"> <b>Total</b></p></div>
            </Row>
        </div>
    );
}
 
export default Cartcols;