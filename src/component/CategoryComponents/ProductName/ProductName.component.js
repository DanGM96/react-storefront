import { PureComponent } from "react";

import "./ProductName.style.scss";

export class ProductCard extends PureComponent {
  render() {
    return (
      <span className="product-name">
        {this.props.brand} {this.props.name}
      </span>
    );
  }
}

export default ProductCard;
