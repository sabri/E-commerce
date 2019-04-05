import React, { Component } from 'react'
import { Consumer } from '../Contect'
import styled from 'styled-components'
import{FaRegTimesCircle} from 'react-icons/fa'
import { Fade } from 'react-slideshow-image';
import { Container, Row } from 'react-bootstrap'
export default class SlideModal extends Component {
    render() {
     
        return (
            <div>
                <Consumer>
                    {value => {
                        const { slide, slideclose } = value;
                        const { img, img1 } = value.slidepr;
                        if (!slide) {
                            return null;
                        }
                        else {
                            return (
                                <ModalContainer>
                                    <Container>
                                        <Row>
                                            <div className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                                            <button style={{position:"absolute", top:"O",float:"right",zIndex:"5OO",right:"0",background:"rgba(0, 0, 0, 0.3)",border:"none"}} onClick={() => { slideclose() }}><FaRegTimesCircle/></button>

                                                <Fade {...fadeProperties}>
                                                    <div className="each-fade1">
                                                        <div className="image-container1">
                                                            <img src={img} alt="first" className="img-fluid" width="1700px" height="1700px" />
                                                        </div>

                                                    </div>
                                                    <div className="each-fade1">
                                                        <div className="image-container1">
                                                            <img src={img1} alt="first" className="img-fluid" width="1700px" height="1700px" />
                                                        </div>
                                                    </div>
                             </Fade>
                                                  </div>
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
const fadeProperties = {
    duration: 3000,
    transitionDuration: 500,
    infinite: false,
    indicators: true
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


`;
