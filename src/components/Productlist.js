import React, { Component } from 'react'
import { Container, Row} from "react-bootstrap"
import { Slideshow } from './Slide';
import "./Slide.css";
import {Consumer} from '../Contect'
import ProductCard from "./ProductCard";
export default class Productlist extends Component {

  render() {
    return (

      <Container style={{ marginTop: "30px"}}>

        <Slideshow />
 <h2 style={{textAlign:"center", margin:"auto",padding:"40px"}}> Our Product </h2>
        <Row style={{textAlign: "center", margin: "auto " }}>
         <Consumer>
           {value => {
             return value.products.map(product=>{
               return <ProductCard key ={product.id} product ={product}/>
             })
           }}
         </Consumer>
        </Row>
      </Container>

    )
  }
}
