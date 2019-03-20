import React, { Component } from 'react'
import {data,productl} from "./Data";
const Context = React.createContext();

export class Provider extends Component {
  state = {
    products:[],
    details:productl
  }
  componentDidMount(){
    this.setproduct();
  }
  setproduct = () =>{
    let product=[];
    data.forEach(item=>{
      const singleItem={...item};
      product=[...product,singleItem];
    });
    this.setState(()=>{return{products:product}});
  };
  getItem=id=>{
    const product = this.state.products.find(item => item.id===id);
    return product;
  }
 handledetail=id =>{
   const product = this.getItem(id);
   this.setState(()=>{
     return {details:product};
   })
 }
 handleadd=(id) =>{
  console.log(`${id}`)
}
  render() {
    return (
      <Context.Provider  value={{
        ...this.state,
        handledetail:this.handledetail,
        handleadd:this.handleadd
        }}>
        {this.props.children}
      </Context.Provider>
    )
  }
}
export const Consumer = Context.Consumer;
