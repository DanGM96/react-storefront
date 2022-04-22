import { PureComponent } from "react";

import ProductPrice from "../ProductPrice/ProductPrice.component";
import AttributeSelector from "../AttributeSelector/AttributeSelector.component";

import { CartContext } from "../../../store/CartContext";

import "./ProductOptions.style.scss";
import MainButton from "../MainButton/MainButton.component";

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

        <div className="product-options__attributes">
          {product.attributes.map((item) => (
            <AttributeSelector key={item.id} {...{ attribute: item, inStock: product.inStock }} />
          ))}
        </div>

        <span className="product-options__price-label">PRICE:</span>
        <ProductPrice className="product-options__price-value" prices={product.prices} />

        <MainButton {...{ disabled: notInStock, type: "submit", primary: true }}>
          ADD TO CART
        </MainButton>
      </form>
    );
  }
}

export default ProductOptions;
