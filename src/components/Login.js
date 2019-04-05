import React, { Component } from 'react'
import {Form,Button} from 'react-bootstrap'
export default class Login extends Component {
  render() {
    return (
                   <div>
            <div className="card" style={{border:"none"}}>
     <section className="card-body mx-auto" style={{maxWidth: "400px"}}>

     <h3 style = {{margin:"20px",justifyContent:"center", color:"rgb(177, 50, 128)",textAlign:"center"}}>
              Sign-In
          </h3>    
               
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
                
                     <div className="form-group">
                                            <button type="submit" className="btn btn-primary btn-block"> Sign in  </button>
                     </div>
            </form>
       </section>
    </div> 
                            
    </div>)
  }
}
