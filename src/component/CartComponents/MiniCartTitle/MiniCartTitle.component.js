import { PureComponent } from "react";

import "./MiniCartTitle.style.scss";

export class MiniCartTitle extends PureComponent {
  render() {
    return (
      <div className="mini-cart-title">
        <span className="mini-cart-title__text">My Bag</span>
        <span className="mini-cart-title__quantity">, {this.props.totalQuantity} items</span>
      </div>
    );
  }
}

export default MiniCartTitle;
