import React, { Component } from 'react'
import styled from 'styled-components'
import { Col, Row } from 'react-bootstrap'
import { MdAddShoppingCart } from "react-icons/md"
import PropTypes from 'prop-types';
import { Consumer } from '../Contect';
import { Growl } from 'primereact/growl';

export default class ProductCard extends Component {
  constructor() {
    super();
    this.showSuccess = this.showSuccess.bind(this);

  }

  showSuccess() {
    this.growl.show({ severity: 'success', summary: 'Success Add', detail: 'Order submitted to your Cart' });
  }

  render() {
    const { id, img, nom, price, color, incart, Ne,price1,percent } = this.props.product;
    return (
      <Cardwrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3" >
        <Growl ref={(el) => this.growl = el} />

        <Consumer>
          {(value) => (

            <div className="card" style={{ border: "1px solid lightgray" }}>
            

              {Ne ? (<span className="cart-btn1" disabled={true}>New </span>) : ( (price1 !==0 )? <div className="ui red right ribbon label">{percent}</div>:null)}


              <div className="img-container p-5 " onClick={() => value.handledetail(id)}>
                <img src={img} alt={nom} className="card-img-top" width="300px" height="200px" onClick={() => { value.modalopen(id); }} />

                <button className="cart-btn" disabled={incart ? true : false}
                  onClick={() => {
                    value.handleadd(id);
                    this.showSuccess()
                  }}>
                  {incart ? (<p className="text-capitalize mb-0" disabled>incart</p>) : (<MdAddShoppingCart />)}
                </button>

              </div>


              <div className="card-footer justify-content-between">
                <Row style={{padding:"none",margin:"none"}}>
                  <p className="align-self-center" style={{ color: "black", fontSize: "bold", fontSize: "10" }}>{nom} &nbsp;- &nbsp;<b>{color}</b></p>
                </Row>
                <Row style={{padding:"none" , margin:"none"}}>
                 Price:  &nbsp; &nbsp; &nbsp; &nbsp; {
(price1==0) ? (  <h6 className="text-blue" style={{ color: "red" }}><span>$</span>  {price} </h6>):

(<h6 className="text-blue" style={{ color: "red",padding:"none" }}>
  <span>$</span> {price} &nbsp;- &nbsp; <span>$</span><del>{price1}</del> </h6>
)

                  }
           
                </Row>




              </div>

            </div>
          )}
        </Consumer>

      </Cardwrapper>
    )
  }
}
ProductCard.propTypes = {
  product: PropTypes.shape(
    {
      id: PropTypes.number,
      nom: PropTypes.string,
      img: PropTypes.string,
      price: PropTypes.number,
      incart: PropTypes.bool
    }
  ).isRequired
}
const Cardwrapper = styled.div`

.card {
  border-color: transparent;
  transition: all 1s linear;
}
.card-footer {
  background:transparent;
  border-top: transparent;
  transition: all 1s linear;
}
&:hover{
  .card{
    border : 0.04rem solid rgba(0,0,0,0.2);
    box-shadow : 2px 2px 5px 0px rgba(0,0,0,0.2);
  }
  .card-footer{
    background : rgba(247,247,247);

  }}
  .img-container{
    position : relative;
    overflow : hidden;
  }
  .card-img-top{
    transition : all 1s linear;
  }
  .img-container:hover .card-img-top{
    transform: scale(1.2);
  }


.cart-btn{
 
  position:absolute;
  bottom:0;
  right :0;
  padding : 0.2rem 0.4rem;
  background : black;
  border: none;
  color:white;
  font-size: 1.4rem;
  border-radius: 0.5rem 0 0 0;
  transition : all 1s linear;
  transform: translate(100%,100%);
}

  .cart-btn1{
  Z-index:22;
    position:absolute;
    top:0;
    left:0;
    padding : 0.2rem 0.4rem;
    background : red;
    border: none;
    color:white;
    font-size: 10;
    border-radius: 0.5rem 0 0 0;
    transition : all 1s linear;
    transform: translate(100%,100%);
}
.img-container:hover .cart-btn{
  transform: translate(0,0);
}
.cart-btn:hover{
  color:rgb(177, 50, 128);
  cursor:pointer;
}

.cart-btn1:hover{
  color:rgb(177, 50, 128);
  cursor:pointer;
}

`;




