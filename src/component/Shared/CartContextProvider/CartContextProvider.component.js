import { PureComponent } from "react";

import { CartContext } from "../../../store/CartContext";

export class CartContextProvider extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      addProduct: this.addProduct.bind(this),
      removeProduct: this.removeProduct.bind(this),
    };
  }

  updateCart(cartCopy) {
    sessionStorage.setItem("cart", JSON.stringify(cartCopy));
    this.setState({ cart: cartCopy });
  }

  productIndex(cartCopy, product) {
    return cartCopy.findIndex(
      (item) => JSON.stringify(item.selectedProduct) === JSON.stringify(product)
    );
  }

  addProduct(selectedProduct, quantity = 1) {
    let cartCopy = [...this.state.cart];
    const index = this.productIndex(cartCopy, selectedProduct);

    if (index > -1) {
      cartCopy[index].quantity += quantity;
    } else {
      cartCopy.push({ quantity: quantity, selectedProduct: selectedProduct });
    }

    this.updateCart(cartCopy);
  }

  removeProduct(selectedProduct, quantity = 1) {
    let cartCopy = [...this.state.cart];
    const index = this.productIndex(cartCopy, selectedProduct);

    if (cartCopy[index].quantity === 0) {
      cartCopy.splice(index, 1);
    } else {
      cartCopy[index].quantity -= quantity;
    }

    this.updateCart(cartCopy);
  }

  componentDidMount() {
    const cart = sessionStorage.getItem("cart");
    if (cart !== null) {
      this.setState({ cart: JSON.parse(cart) });
    }
  }

  render() {
    return <CartContext.Provider value={this.state}>{this.props.children}</CartContext.Provider>;
  }
}

export default CartContextProvider;
