import React, { Component } from 'react'
import { Container, Row} from "react-bootstrap"
import { Slideshow } from './Slide';
import "./Slide.css";
import { Consumer } from '../Contect'
import ProductCard from "./ProductCard";
import Search from "./Search";


export default class Productlist extends Component {


  rendersearch = () => {
    return (

      <Container style={{ marginTop: "30px" }}>

<Slideshow />

<Search/>

        <Row style={{ textAlign: "center", margin: "auto " }}>
          <Consumer>
            {value => {
              return value.searchQuery.map(product => {
                return <ProductCard key={product.id} product={product} />
              })
            }}
          </Consumer>
        </Row>
      </Container>

    );
  }


  renderlist = () => {
    return (

      <Container>

     
<Slideshow />



<Search/>

        <Row style={{ textAlign: "center", margin: "auto " }}>
          <Consumer>
            {value => {
              return value.products.map(product => {
                return <ProductCard key={product.id} product={product} />
              })
            }}
          </Consumer>
        </Row>
      </Container>

    )
  }


  render() {
    return (
      < div >

      <Consumer>
        {(value)=>{

return( value.searchQuery.length === 0 ? this.renderlist() :this.rendersearch())


        }}

      </Consumer>
    
  </div >

    )


   
   
}

}
