import { PureComponent } from "react";
import ProductPrice from "../../Shared/ProductPrice/ProductPrice.component";
import AttributeSelector from "../AttributeSelector/AttributeSelector.component";

import "./ProductInfo.style.scss";

export class ProductInfo extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const product = this.props.product;

    return (
      <div className="product-info">
        <span className="product-info__brand">{product.brand}</span>
        <span className="product-info__name">{product.name}</span>

        <form className="product-info__form">
          {product.attributes.map((attribute) => (
            <AttributeSelector key={attribute.id} attribute={attribute} />
          ))}

          <span className="product-info__price-label">PRICE:</span>
          <ProductPrice className="product-info__price-value" prices={product.prices} />

          <button className="product-info__button" type="submit">
            ADD TO CART
          </button>
        </form>

        <div
          className="product-info__description"
          dangerouslySetInnerHTML={{ __html: product.description }}
        ></div>
      </div>
    );
  }
}

export default ProductInfo;
