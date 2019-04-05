import React, { Component } from 'react'
import "./Slide.css"
import {Button} from "react-bootstrap"
export default class Signup extends Component{
    render() {
        return (
     <div>
            <div className="card" style={{border:"none"}}>
     <section className="card-body mx-auto" style={{maxWidth: "400px"}}>

     <h3 style = {{margin:"20px",justifyContent:"center", color:"rgb(177, 50, 128)",textAlign:"center"}}>
              Sign-up
          </h3>                <p>
                    <Button className=" btn-twitter" style={{background:"#42AEEC"}}> <i className="fab fa-twitter"></i>   Login via Twitter</Button>
                    &nbsp;&nbsp;&nbsp; <Button className="btn-facebook"style={{background:"#405D9D"}}> <i className="fab fa-facebook-f"></i>   Login via facebook</Button>
                </p>
                <p class="divider-text">
                    <span class="bg-light">OR</span>
                </p>
            <form>
                
                   <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
                            </div>
                            <input name="" className="form-control" placeholder="Email address" type="email"/>
                    </div>
                 
                    <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                                    </div>
                                    <input className="form-control" placeholder="Create password" type="password"/>
                     </div>
                     <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                                        </div>
                                        <input className="form-control" placeholder="Repeat password" type="password"/>
                      </div>
                     <div className="form-group">
                                            <button type="submit" className="btn btn-primary btn-block"> Create Account  </button>
                     </div>
            </form>
       </section>
    </div> 
                            
    </div>
                    
                    )
                  }
                }
