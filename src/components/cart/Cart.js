import React, { Component, Fragment } from 'react'
import Cartcols from './Cartcols';
import Empty from './Empty';
import { Consumer } from '../../Contect';
import List from './List';
import Total from './Total';

export default class Cart extends Component {

  render() {
    return (
      <section>
        <Consumer>
          {(value) => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <Fragment>
                  <h1 style={{ textAlign: "center", color: "rgb(177, 50, 128)", paddingBottom: "20px" }}><b>My Cart List </b> </h1>
                  <Cartcols />
                  <List value={value}/>
                  <Total value={value}/>
                </Fragment>

              );
            }
            else {
                   return <Empty />
                 }
          }
          }
        </Consumer>
      </section>
    )
  }
}
