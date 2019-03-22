import React from 'react';
import { Container, Row } from 'react-bootstrap';
import {Link} from 'react-router-dom'
const Total = ({value}) => {
    const {cartsubtitle,tax,Carttotal}=value;
    const{ clear}=value
    return (
        <Container>
            <Row>
                <div className="col-10 mt-2 ml-md-auto ml-sm-5 col-sm-8 text-capitalize text-right">
                    <Link to ="/">
                    <button type="button" class="btn btn-danger" style={{margin:"20px"}} onClick={()=>{clear()}}>Clear all</button>
                    </Link>
                    <h5 style ={{color:"dargray",margin:"5px"}}>Subtital:&nbsp;&nbsp; <span style={{color:"003300"}}>$</span> <span style={{color:"003300"}}>{cartsubtitle}</span></h5>
                    <h5 style ={{color:"dargray",margin:"5px"}}>Tax :&nbsp;&nbsp;<span style={{color:"003300"}}>$</span> <span style={{color:"003300"}}>{tax}</span></h5>
                    <h5 style ={{color:"dargray",margin:"5px"}}>Total:&nbsp;&nbsp;<span style={{color:"003300"}}>$</span> <span style={{color:"003300"}}> {Carttotal}</span></h5>
                </div>
            </Row>

        </Container>
    );
};

export default Total;