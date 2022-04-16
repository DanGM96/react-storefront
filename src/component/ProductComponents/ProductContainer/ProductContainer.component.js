import { PureComponent } from "react";
import ProductInfo from "../ProductInfo/ProductInfo.component";
import Gallery from "../Gallery/Gallery.component";

import "./ProductContainer.style.scss";

export class ProductContainer extends PureComponent {
  render() {
    return (
      <div className="product-container">
        <Gallery gallery={this.props.product.gallery} />
        <ProductInfo product={this.props.product} />
      </div>
    );
  }
}

export default ProductContainer;
