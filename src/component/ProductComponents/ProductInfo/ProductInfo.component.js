import { PureComponent } from "react";
import ProductPrice from "../../Shared/ProductPrice/ProductPrice.component";
import AttributeSelector from "../../Shared/AttributeSelector/AttributeSelector.component";
import ProductOptions from "../../Shared/ProductOptions/ProductOptions.component";

import "./ProductInfo.style.scss";

export class ProductInfo extends PureComponent {
  render() {
    return (
      <div className="product-info">
        <ProductOptions product={this.props.product} />
        <div
          className="product-info__description"
          dangerouslySetInnerHTML={{ __html: this.props.product.description }}
        />
      </div>
    );
  }
}

export default ProductInfo;
