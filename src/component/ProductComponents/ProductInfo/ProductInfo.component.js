import { PureComponent } from "react";
import { Interweave } from "interweave";

import ProductOptions from "../../Shared/ProductOptions/ProductOptions.component";

import "./ProductInfo.style.scss";

export class ProductInfo extends PureComponent {
  render() {
    return (
      <div className="product-info">
        <ProductOptions product={this.props.product} />

        <Interweave
          className="product-info__description"
          content={this.props.product.description}
        />
      </div>
    );
  }
}

export default ProductInfo;
