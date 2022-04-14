import { PureComponent } from "react";
import { ReactComponent as CartIcon } from "../../../asset/icons/cart.svg";

import "./CartShortcut.style.scss";

export class CartShortcut extends PureComponent {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    alert("TODO: Send to cart");
  }

  render() {
    return (
      <div className="cart-shortcut" onClick={this.handleClick}>
        <CartIcon />
      </div>
    );
  }
}

export default CartShortcut;
