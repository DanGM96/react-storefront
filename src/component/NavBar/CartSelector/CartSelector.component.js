import { PureComponent } from "react";

import { ReactComponent as CartIcon } from "../../../asset/icons/cart.svg";

import "./CartSelector.style.scss";

export class CartSelector extends PureComponent {
  render() {
    return (
      <div className="cart-selector">
        <CartIcon />
        <div className="cart-selector__circle">
          <span className="cart-selector__circle-text">2</span>
        </div>
      </div>
    );
  }
}

export default CartSelector;
