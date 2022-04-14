import { PureComponent } from "react";

import { CurrencyContext } from "../../../store/CurrencyContext";
import "./ProductPrice.style.scss";

export class ProductPrice extends PureComponent {
  render() {
    return (
      <span className="product-price">
        <CurrencyContext.Consumer>
          {(value) => {
            const priceIndex = this.props.prices.findIndex(
              ({ currency: { label } }) => label === value.currency.label
            );
            return value.currency.symbol + this.props.prices[priceIndex].amount;
          }}
        </CurrencyContext.Consumer>
      </span>
    );
  }
}

export default ProductPrice;
