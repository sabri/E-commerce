import React, { Component } from 'react'
import { data, productl } from "./Data";

const Context = React.createContext();

export class Provider extends Component {

  state = {
    products: [],
    details: productl,
    cart: [],
    searchQuery: [],
  
    modalOpen: false,
    slidepr: productl,
    slide: false,
    modalproduct: productl,
    cartsubtitle: 0,
    tax: 0,
    dcart: false,
    Carttotal: 0
  }
  componentDidMount() {
    this.setproduct();
  }
  setproduct = () => {
    let product = [];
    data.forEach(item => {
      const singleItem = { ...item };
      product = [...product, singleItem];
    });
    this.setState(() => { return { products: product } });
  };
  getItem = id => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  }
  handledetail = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { details: product };
    })
  }

  handleadd = (id) => {
    let tempProdct = [...this.state.products];
    const index = tempProdct.indexOf(this.getItem(id));
    const product = tempProdct[index];
    product.incart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(() => {
      return {
        products: tempProdct,
        cart: [...this.state.cart, product],
        addcart: true
      };
    },
      () => {
        this.addtotal()


      }

    );

  };
  modalopen = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalproduct: product, modalOpen: true };
    })

  }
  search = (e) => {
    const tempsearch = [...this.state.products];
    const v=e.target.value;
    console.log(v)
    if ( v !== ""){
      let product = tempsearch.filter(item => {
        let filteritem= item.company.toLowerCase()
       return filteritem.startsWith(e.target.value.toLowerCase()) !== false;
      });
      console.log(product)

        this.setState(() => {
          return {
            searchQuery:[...product],
          }
        })
    } else {

      this.setState(() => {
        return {
          searchQuery:[...this.state.products],
        }
      })
    }

  }


  modelclose = () => {
    this.setState(() => {
      return { modalOpen: false };
    })
  }
  slideopen = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { slidepr: product, slide: true };
    })

  }
  slideclose = () => {
    this.setState(() => {
      return { slide: false };
    })
  }
  increment = (id) => {
    let tempcart = [...this.state.cart]
    let selectproduct = tempcart.find(item => item.id === id)
    const index = tempcart.indexOf(selectproduct)
    const product = tempcart[index]
    product.count = product.count + 1;
    product.total = product.count * product.price;
    this.setState(() => {
      return { cart: [...tempcart] }
    }, () => { this.addtotal() })

  }
  decrement = (id) => {
    let tempcart = [...this.state.cart]
    let selectproduct = tempcart.find(item => item.id === id)
    const index = tempcart.indexOf(selectproduct)
    const product = tempcart[index]
    if (product.count === 0) {

      this.remove(id)
    } else {
      product.count = product.count - 1;
      product.total = product.count * product.price;
      this.setState(() => {
        return { cart: [...tempcart] }
      }, () => { this.addtotal() })
    }
  }
  remove = (id) => {
    let tempProduct = [...this.state.products]
    let tempcart = [...this.state.cart]
    tempcart = tempcart.filter(item => item.id !== id)
    const index = tempProduct.indexOf(this.getItem(id))
    let rmoveitem = tempProduct[index]
    rmoveitem.incart = false
    rmoveitem.count = 0;
    rmoveitem.total = 0
    this.setState(() => {
      return { cart: [...tempcart], products: [...tempProduct] }
    }, () => { this.addtotal() })
  }
  clear = () => {
    this.setState(() => { return { cart: [] } }, () => {
      this.setproduct();
      this.addtotal();
    });
  }
  addtotal = () => {
    let subtotal = 0;
    this.state.cart.map(item => (subtotal += item.total));
    const temptax = subtotal * 0.1;
    const ctax = parseFloat(temptax.toFixed(2));
    const ctotal = subtotal + ctax;
    this.setState(() => {
      return {
        cartsubtitle: subtotal,
        tax: ctax,
        Carttotal: ctotal
      }
    })
  }
  render() {
    return (
      <Context.Provider value={{
        ...this.state,
        increment: this.increment,
        decrement: this.decrement,
        remove: this.remove,
        clear: this.clear,
        handledetail: this.handledetail,
        handleadd: this.handleadd,
        modalopen: this.modalopen,
        modelclose: this.modelclose,
        slideclose: this.slideclose,
        slideopen: this.slideopen,
        search: this.search      }}>
        {this.props.children}
      </Context.Provider>
    )
  }
}
export const Consumer = Context.Consumer;
