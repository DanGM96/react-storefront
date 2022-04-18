import { PureComponent } from "react";

import ProductPrice from "../ProductPrice/ProductPrice.component";
import AttributeSelector from "../AttributeSelector/AttributeSelector.component";

import { CartContext } from "../../../store/CartContext";

import "./ProductOptions.style.scss";

export class ProductOptions extends PureComponent {
  static contextType = CartContext;

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const context = this.context;
    const formData = new FormData(event.target);
    const formObject = Object.fromEntries(formData.entries());
    const product = {
      product: this.props.product,
      selectedAttributes: formObject,
    };
    context.addProduct(product);
  }

  render() {
    const product = this.props.product;
    const notInStock = !product.inStock;

    return (
      <form className="product-options" onSubmit={this.handleSubmit}>
        <span className="product-options__brand">{product.brand}</span>
        <span className="product-options__name">{product.name}</span>

        {product.attributes.map((attribute) => (
          <AttributeSelector
            key={attribute.id}
            {...{ attribute: attribute, inStock: product.inStock }}
          />
        ))}

        <span className="product-options__price-label">PRICE:</span>
        <ProductPrice className="product-options__price-value" prices={product.prices} />

        <button
          className={`product-options__button 
            ${notInStock ? "product-options__button--unavailable" : ""}`}
          type="submit"
          disabled={notInStock}
        >
          ADD TO CART
        </button>
      </form>
    );
  }
}

export default ProductOptions;
