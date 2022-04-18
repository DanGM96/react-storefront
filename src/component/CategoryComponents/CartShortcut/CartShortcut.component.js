import { PureComponent } from "react";

import { ReactComponent as CartIcon } from "../../../asset/icons/cart.svg";

import "./CartShortcut.style.scss";

export class CartShortcut extends PureComponent {
  render() {
    return (
      <div className="cart-shortcut">
        <CartIcon />
      </div>
    );
  }
}

export default CartShortcut;
