import React from 'react';
import Item from './Item';
 
const List = ({value}) => {
    const {cart}=value;
    return (
        <div className="container-fluid">
            {cart.map(item=>{

                return (<div style={{margin:"20px"}} > <Item key ={item.id} item={item} value={value}/></div>)

            })};
        </div>
    );
}
 
export default List;