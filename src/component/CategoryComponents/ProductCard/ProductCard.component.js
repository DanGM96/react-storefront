import { PureComponent } from "react";
import { Link } from "react-router-dom";

import ProductImage from "../ProductImage/ProductImage.component";
import ProductName from "../../Shared/ProductName/ProductName.component";
import ProductPrice from "../../Shared/ProductPrice/ProductPrice.component";
import CartShortcut from "../CartShortcut/CartShortcut.component";
import ProductShortcut from "../ProductShortcut/ProductShortcut.component";

import "./ProductCard.style.scss";

export class ProductCard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isShortcutOpen: false,
    };
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

  render() {
    const product = this.props.product;
    const notInStock = !product.inStock;
    const className = "card";

    return (
      <div className="product-card">
        <Link to={`/${product.category}/${product.id}`}>
          <div
            className={`product-card__group ${
              notInStock ? "product-card__group--unavailable" : ""
            }`}
          >
            <ProductImage src={product.gallery[0]} inStock={product.inStock} />

            {product.inStock && (
              <div className="product-card__group-shortcut" onClick={this.openShortcut}>
                <CartShortcut />
              </div>
            )}

            <ProductName {...{ brand: product.brand, name: product.name, className: className }} />

            <ProductPrice {...{ prices: product.prices, className: className }} />
          </div>
        </Link>

        {this.state.isShortcutOpen && (
          <ProductShortcut id={product.id} onBlur={this.closeShortcut} />
        )}
      </div>
    );
  }
}

export default ProductCard;
