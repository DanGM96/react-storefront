import { PureComponent } from "react";

import { CurrencyContext } from "../../../store/CurrencyContext";
import { getProductPrice } from "../../../util/functions";

export class ProductPrice extends PureComponent {
  render() {
    return (
      <span className={this.props.className}>
        <CurrencyContext.Consumer>
          {(value) => {
            const price = getProductPrice(this.props.prices, value.currency);
            return value.currency.symbol + price;
          }}
        </CurrencyContext.Consumer>
      </span>
    );
  }
}

export default ProductPrice;
