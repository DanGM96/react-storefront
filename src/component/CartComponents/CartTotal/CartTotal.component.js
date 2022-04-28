import { PureComponent } from "react";

import { CurrencyContext } from "../../../store/CurrencyContext";
import { getProductPrice } from "../../../util/functions";
import "./CartTotal.style.scss";

export class CartTotal extends PureComponent {
  getTotalValue(cart, currency, taxRate = this.props.taxRate ?? 1) {
    const totalValue = cart.reduce(
      (prev, curr) =>
        prev + getProductPrice(curr.selectedProduct.product.prices, currency) * curr.quantity,
      0
    );
    return totalValue * taxRate;
  }

  render() {
    const className = this.props.className;
    let text = this.props.text;

    if (className !== "mini") {
      text += ": ";
    }

    return (
      <div className={"cart-total-" + this.props.className}>
        <span className={"cart-total-" + this.props.className + "__text"}>{text}</span>
        <span className={"cart-total-" + this.props.className + "__value"}>
          <CurrencyContext.Consumer>
            {(value) =>
              value.currency.symbol + this.getTotalValue(this.props.cart, value.currency).toFixed(2)
            }
          </CurrencyContext.Consumer>
        </span>
      </div>
    );
  }
}

export default CartTotal;
