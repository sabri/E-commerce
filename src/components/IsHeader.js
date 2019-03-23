import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
import Sticky from 'react-sticky-el';
import {FaShoppingBasket,FaSearch,FaShoppingCart,FaUser} from 'react-icons/fa'
const IsHeader = () => {
    return (
        <Sticky style={{ zIndex: "22" }}>
            <div className="navbar">
                <Link to="/">
                    <div className="img">
                        <img src="logo.png" alt="Avatar" className="avatar" />
                       <span style={{marginTop:"20px"}}><h5>Mobile Online</h5></span> 
                    </div>
                </Link>
                <div className="search-container" style={{marginBottom:"20px"}}>
                    <form>
                        <input type="text" placeholder="Search.." name="search"/>
                            <button type="submit" onChange={console.log("sabri")}><FaSearch/></button>
                     </form>
                 </div>
                    <div>
                    <Link to="/Cart"> <span><FaShoppingBasket/>&nbsp;My cart </span></Link>

                        <Link to="/Cart"> <span><FaUser/>&nbsp;Log In</span></Link>
                        <Link to="/"> <span><FaShoppingCart/>&nbsp;Product </span></Link>

                    </div>

                </div>
        </Sticky>
            );
        }
        
        export default IsHeader;
