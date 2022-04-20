import { PureComponent } from "react";
import { Link } from "react-router-dom";

import ProductImage from "../ProductImage/ProductImage.component";
import ProductName from "../ProductName/ProductName.component";
import ProductPrice from "../../Shared/ProductPrice/ProductPrice.component";
import CartShortcut from "../CartShortcut/CartShortcut.component";
import ProductShortcut from "../ProductShortcut/ProductShortcut.component";

import "./ProductCard.style.scss";

export class ProductCard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false,
      isShortcutOpen: false,
    };
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.openShortcut = this.openShortcut.bind(this);
    this.closeShortcut = this.closeShortcut.bind(this);
  }

  closeShortcut() {
    this.setState({ isShortcutOpen: false });
  }

  openShortcut(event) {
    event.preventDefault();
    this.setState({ isShortcutOpen: true });
  }

  handleMouseHover() {
    this.setState((state) => ({ isHovering: !state.isHovering }));
  }

  render() {
    const product = this.props.product;
    const notInStock = !product.inStock;

    return (
      <>
        <Link to={`/${product.category}/${product.id}`}>
          <div
            className={`product-card ${notInStock ? "product-card--unavailable" : ""}`}
            onMouseEnter={this.handleMouseHover}
            onMouseLeave={this.handleMouseHover}
          >
            <ProductImage src={product.gallery[0]} inStock={product.inStock} />

            {this.state.isHovering && product.inStock && (
              <div onClick={this.openShortcut}>
                <CartShortcut product={product.id} />
              </div>
            )}

            <ProductName brand={product.brand} name={product.name} />

            <ProductPrice className="product-card__price" prices={product.prices} />
          </div>
        </Link>

        {this.state.isShortcutOpen && (
          <ProductShortcut id={product.id} closeShortcut={this.closeShortcut} />
        )}
      </>
    );
  }
}

export default ProductCard;
