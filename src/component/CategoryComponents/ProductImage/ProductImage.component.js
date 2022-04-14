import { PureComponent } from "react";

import "./ProductImage.style.scss";

export class ProductImage extends PureComponent {
  render() {
    return (
      <div className="product-image">
        <img src={this.props.src} alt="" />

        {!this.props.inStock && <span>OUT OF STOCK</span>}
      </div>
    );
  }
}

export default ProductImage;
