import React, { Component } from 'react'
import { Consumer } from '../Contect'
import styled from 'styled-components'
import { ButtonContainer } from './Button'
import { Link } from 'react-router-dom'
import { Container, Row } from 'react-bootstrap'
export default class Modal extends Component {
    render() {
        return (
            <div>
                <Consumer>
                    {value => {
                        const { modalOpen, modelclose } = value;
                        const { img, nom, price } = value.modalproduct;
                        if (!modalOpen) {
                            return null;
                        }
                        else {
                            return (
                                <ModalContainer>
                                    <Container>
                                        <Row>
                                            <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                                                <h5>Item have added to your cart</h5>
                                                <img src={img} className="img-fluid" alt={nom} />
                                                <h5>{nom}</h5>
                                                <h5 className="text-black-50 text-muted" >
                                                    <strong>
                                                        Price : <span style={{ color: "red" }}>$</span> <span style={{ color: "red" }}>{price}</span>
                                                    </strong>
                                                </h5>
                                                <Link to="/">
                                                <ButtonContainer onClick={()=> modelclose()}>
                                                 Product List
                                                </ButtonContainer>
                                                </Link> 
                                                <Link to="/Details">
                                                <ButtonContainer cart onClick={()=> modelclose()}>
                                                Details
                                                </ButtonContainer>
                                                </Link>                                              </div>
                                        </Row>
                                    </Container>
                                </ModalContainer>
                            );

                        }

                    }}
                </Consumer>
            </div>
        )
    }
}
const ModalContainer = styled.div`
position: fixed;
Z-index:222;
top: 0;
left: 0;
right: 0;
bottom: 0;
background: rgba(0, 0, 0, 0.3);
display: flex;
align-items: center;
justify-content: center;
#modal{
  background:white;
}


`;
