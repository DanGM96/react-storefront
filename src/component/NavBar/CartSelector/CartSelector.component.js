import { PureComponent } from "react";

import { ReactComponent as CartIcon } from "../../../asset/icons/cart.svg";

import { CartContext } from "../../../store/CartContext";
import "./CartSelector.style.scss";

export class CartSelector extends PureComponent {
  render() {
    return (
      <div className="cart-selector">
        <CartIcon />
        <div className="cart-selector__circle">
          <CartContext.Consumer>
            {(value) => <span className="cart-selector__circle-text">{value.totalQuantity}</span>}
          </CartContext.Consumer>
        </div>
      </div>
    );
  }
}

export default CartSelector;
