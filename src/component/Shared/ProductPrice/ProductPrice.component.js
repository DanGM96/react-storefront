import { PureComponent } from "react";

import { CurrencyContext } from "../../../store/CurrencyContext";
import { getProductPrice } from "../../../util/functions";
import "./ProductPrice.style.scss";

export class ProductPrice extends PureComponent {
  render() {
    const className = this.props.className;

    return (
      <div className="product-price">
        {this.props.withLabel && (
          <span className={"product-price-" + className + "__label"}>PRICE:</span>
        )}
        <span className={"product-price-" + className + "__value"}>
          <CurrencyContext.Consumer>
            {(value) => {
              const price = getProductPrice(this.props.prices, value.currency);
              return value.currency.symbol + price;
            }}
          </CurrencyContext.Consumer>
        </span>
      </div>
    );
  }
}

export default ProductPrice;
