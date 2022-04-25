import { PureComponent } from "react";

import "./CartQuantity.style.scss";

export class CartQuantity extends PureComponent {
  render() {
    const className = this.props.className;
    let value = this.props.value;

    if (className === "mini") {
      value = `, ${this.props.value} items`;
    }

    return (
      <div className={"cart-quantity-" + this.props.className}>
        <span className={"cart-quantity-" + this.props.className + "__text"}>
          {this.props.text}
        </span>
        <span className={"cart-quantity-" + this.props.className + "__value"}>{value}</span>
      </div>
    );
  }
}

export default CartQuantity;
