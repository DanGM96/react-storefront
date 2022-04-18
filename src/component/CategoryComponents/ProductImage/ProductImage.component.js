import { PureComponent } from "react";

import "./ProductImage.style.scss";

export class ProductImage extends PureComponent {
  render() {
    const notInStock = !this.props.inStock;

    return (
      <div className="product-image">
        <img
          className={`product-image__img ${notInStock ? "product-image__img--unavailable" : ""}`}
          src={this.props.src}
          alt=""
        />

        {notInStock && <span>OUT OF STOCK</span>}
      </div>
    );
  }
}

export default ProductImage;
