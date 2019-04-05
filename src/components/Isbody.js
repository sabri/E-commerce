import React, { Component, Fragment } from 'react'
import Productlist from './Productlist';
import Details from './Details';
import Cart from './cart';
import { Route, Switch } from 'react-router-dom'
import Default from './Default';
import Modal from './Modal';
import Logo from './Logo';

import SlideModal from './SlideModal';
export default class Isbody extends Component {
  render() {
    return (
      <Fragment>
          <Switch>
            <Route exact path="/" component={Productlist} />
            <Route path="/Details" component={Details} />
            <Route path="/Cart" component={Cart} />
            <Route path="/Logo" component={Logo} />
            <Route component={Default} />
          </Switch>
<Modal/>
<SlideModal/>
      </Fragment>
    )
  }
}
