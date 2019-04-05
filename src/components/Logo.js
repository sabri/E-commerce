import React, { Component } from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import Login from './Login';
import Signup from './Signup';
export default class Logo extends Component {
  render() {
    return (
     <React.Fragment>
<Container>
    <Row style={{marginBottom:"100px"}}>
<Col style={{borderRight:"1px solid black"}}>
<Login/>
  </Col>
<Col>
<Signup/>
</Col>
    </Row>
</Container>

     </React.Fragment>
    )
  }
}
