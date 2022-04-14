import { PureComponent } from "react";
import { Link } from "react-router-dom";

import ProductImage from "../ProductImage/ProductImage.component";
import ProductName from "../ProductName/ProductName.component";
import ProductPrice from "../ProductPrice/ProductPrice.component";

import { classNames } from "../../../util/functions";
import "./ProductCard.style.scss";
import CartShortcut from "../CartShortcut/CartShortcut.component";

export class ProductCard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false,
    };
    this.handleMouseHover = this.handleMouseHover.bind(this);
  }

  handleMouseHover() {
    this.setState({ isHovering: !this.state.isHovering });
  }

  render() {
    const product = this.props.product;

    return (
      <Link to={`/${product.id}`}>
        <div
          className={classNames("product-card", {
            "product-card--unavailable": !product.inStock,
          })}
          onMouseEnter={this.handleMouseHover}
          onMouseLeave={this.handleMouseHover}
        >
          <ProductImage src={product.gallery[0]} inStock={product.inStock} />

          {this.state.isHovering && product.inStock && <CartShortcut product={product.id} />}

          <ProductName brand={product.brand} name={product.name} />

          <ProductPrice prices={product.prices} />
        </div>
      </Link>
    );
  }
}

export default ProductCard;
