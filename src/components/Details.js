import React, { Component } from 'react'
import { Consumer } from "../Contect"
import { Link } from "react-router-dom"
import { Row } from "react-bootstrap"
import { ButtonContainer } from './Button';
export default class Details extends Component {
  render() {
    return (
      <Consumer>
        {
          (value) => {
            const { id, nom, company, description, price, img,img1, incart } = value.details;

            return (
              <div className="container py-5">
                <Row>
                  <div className="col-10 mx-auto text-center text-slanted text-blue py-5">
                    <h1><b>{nom}</b></h1>
                  </div>
                </Row>
                <Row>
                  <div className="col-10 mx-auto col-md-6 my-3">
                    <img src={img} alt={nom} className="img-fluid" width="400px" height="700px" onClick={() => { value.slideopen(id) }} />
                  </div>
                  <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                    <h2>model: {nom}</h2>
                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                      made by :<span className="text-uppercase">{company}</span>
                    </h4>
                    <h4 className="text-black-50" >
                      <strong>
                        Price : <span style={{ color: "red" }}>$</span> <span style={{ color: "red" }}>{price}</span>
                      </strong>
                    </h4>
                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                      Some information about product :
      </p>
                    <p className="text-muted lead">{description}</p>
                    <div>
                      <Link to="/">
                        <ButtonContainer variant="dark" style={{ color: "darkorange" }}>
                          back to Product List
        </ButtonContainer></Link>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <Link to="/Cart"> <ButtonContainer cart variant="dark" disabled={incart ? true : false}
                        onClick={() => {
                          value.handleadd(id);
                          value.modalopen(id);
                        }}>
                        {incart ? "In my cart" : "Add to cart"}
                      </ButtonContainer>
                      </Link>

                    </div>
                  </div>
                </Row>
              </div>

            );

          }
        }


      </Consumer>
    );
  }
}
