import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {MdAddShoppingCart} from "react-icons/md"
import PropTypes from 'prop-types';
import { Consumer } from '../Contect';
export default class ProductCard extends Component {
  render() {
    const { id,img, nom, price, color, incart } = this.props.product;
    return (
      <Cardwrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3" >
      <div className="card" style={{ border: "1px solid lightgray" }}>
        <Consumer>
       { (value)=>(
          <div className="img-container p-5 " onClick={()=>value.handledetail(id)}>
            <Link to="/Details">
              <img src={img} alt={nom} className="card-img-top" width="300px" height="200px" />
              </Link>
            <button className="cart-btn" disabled={incart ? true : false}
             onClick={()=>{value.handleadd(id);
                          value.modalopen(id);}}>
              {incart ? (<p className="text-capitalize mb-0" disabled>incart</p>) : (<MdAddShoppingCart />)}
            </button>
           
          </div>
       )}
          </Consumer>
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0" style={{ color: "black", fontSize: "bold" }}>{nom} &nbsp;- &nbsp;<b>{color}</b></p>
            <h5 className="text-blue font-italic mb-0" style={{ color: "red" }}>
              <span className="mr-1">$</span>
              {price}
            </h5>

          </div>

        </div>
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
.img-container:hover .cart-btn{
  transform: translate(0,0);
}
.cart-btn:hover{
  color:rgb(177, 50, 128);
  cursor:pointer;
}

`;




