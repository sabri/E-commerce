import React from 'react';
import { FaPlus, FaMinus, FaRegTrashAlt } from "react-icons/fa"



const Item = ({item, value}) => {
    const { id, img, price, nom, total, count } = item;
    const { increment, decrement, remove} = value;
    return (
        <div className="row text-capitalize text-center"> <div className="col-10 mx-auto col-lg-2"> <p className="text-uppercase"><b> {nom}</b></p></div>
            <div className="col-10 mx-auto col-lg-2"><img src={img} alt="product" style={{ width: "5rem", height: "4rem" }} className="img-fluid" /></div>
            <div className="col-10 mx-auto col-lg-2" style={{color:"red"}}><b><span>$</span> {price}</b></div>
         
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <span className="mx-1" ><button class="btn btn-outline-dark" onClick={() => decrement(id)}><FaMinus/></button> </span>
                    <span className="mx-1"><button class="btn btn-outline-dark">{count}</button></span>
                    <span className=" mx-1"><button class="btn btn-outline-dark" onClick={() => increment(id)}><FaPlus/></button></span>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2"> <button class="btn btn-danger" onClick={() => {remove(id); }}><FaRegTrashAlt/></button></div>
            <div className="col-10 mx-auto col-lg-2"> <span style={{color:"#003300"}}>$</span> <span style={{color:"#003300"}}><b>{total}</b></span></div>
        </div>
    )
}

export default Item;