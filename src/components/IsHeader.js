import React from 'react';
import {Navbar,Nav,Button} from 'react-bootstrap'
import { Link} from 'react-router-dom';
import Sticky from 'react-sticky-el';

const IsHeader = () => {
    return (
        <Sticky style={{zIndex:"22"}}>
        <div>
        <Navbar bg="dark"  variant="dark">
   <Link to ="/"><Navbar.Brand><img src="logo.png" width ="40px" height="30px" alt="music" style={{padding:"none",margin:"none"}}/>&nbsp;&nbsp;Mobile Shop</Navbar.Brand>
   </Link> 
    <Nav className="mr-auto">
     
    </Nav>
   <Link to="/Cart"> <Button variant="dark"><img src ="cart.png" alt ="my cart"width ="30px" height="30px"/> Mycart </Button></Link>
  </Navbar>
        </div>
        </Sticky>
    );
}

export default IsHeader;
