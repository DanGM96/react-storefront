import { PureComponent } from "react";

import { CartContext } from "../../../store/CartContext";

export class CartContextProvider extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      totalQuantity: 0,
      addProduct: this.addProduct.bind(this),
      removeProduct: this.removeProduct.bind(this),
      checkOut: this.checkOut.bind(this),
    };
  }

  updateCart(cartCopy) {
    sessionStorage.setItem("cart", JSON.stringify(cartCopy));
    this.setState({ cart: cartCopy });
  }

  getTotalQuantity(cart) {
    const totalQuantity = cart.reduce((prev, curr) => prev + curr.quantity, 0);
    this.setState({ totalQuantity: totalQuantity });
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

    this.getTotalQuantity(cartCopy);
    this.updateCart(cartCopy);
  }

  removeProduct(selectedProduct, quantity = 1) {
    let cartCopy = [...this.state.cart];
    const index = this.productIndex(cartCopy, selectedProduct);

    if (cartCopy[index].quantity === 1) {
      cartCopy.splice(index, 1);
    } else {
      cartCopy[index].quantity -= quantity;
    }

    this.getTotalQuantity(cartCopy);
    this.updateCart(cartCopy);
  }

  checkOut() {
    let emptyCart = [];
    this.getTotalQuantity(emptyCart);
    this.updateCart(emptyCart);
  }

  componentDidMount() {
    let cart = sessionStorage.getItem("cart");
    if (cart !== null) {
      cart = JSON.parse(cart);
      this.getTotalQuantity(cart);
      this.setState({ cart: cart });
    }
  }

  render() {
    return <CartContext.Provider value={this.state}>{this.props.children}</CartContext.Provider>;
  }
}

export default CartContextProvider;
