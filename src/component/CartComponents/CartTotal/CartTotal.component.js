import { PureComponent } from "react";

import { CurrencyContext } from "../../../store/CurrencyContext";

import { getProductPrice } from "../../../util/functions";
import "./CartTotal.style.scss";

export class CartTotal extends PureComponent {
  getTotalValue(cart, currency) {
    let totalValue = 0;
    cart.forEach(
      (item) =>
        (totalValue +=
          getProductPrice(item.selectedProduct.product.prices, currency) * item.quantity)
    );
    return totalValue;
  }

  render() {
    return (
      <div className="cart-total">
        <span className="cart-total__text">Total</span>
        <span className="cart-total__value">
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
