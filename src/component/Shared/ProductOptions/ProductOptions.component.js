import { PureComponent } from "react";

import ProductPrice from "../ProductPrice/ProductPrice.component";
import AttributeSelector from "../AttributeSelector/AttributeSelector.component";
import MainButton from "../MainButton/MainButton.component";
import ProductName from "../ProductName/ProductName.component";

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
    context.addProduct({ ...{ product: this.props.product, selectedAttributes: formObject } });
  }

  render() {
    const product = this.props.product;
    const notInStock = !product.inStock;
    const className = "big";
    const attributeProps = { isEnabled: product.inStock, className: className };

    return (
      <form className="product-options" onSubmit={this.handleSubmit}>
        <ProductName {...{ brand: product.brand, name: product.name, className: className }} />

        <div className="product-options__attributes">
          {product.attributes.map((item) => (
            <AttributeSelector key={item.id} {...{ ...attributeProps, attribute: item }} />
          ))}
        </div>

        <ProductPrice {...{ prices: product.prices, className: className, withLabel: true }} />

        <div className="product-options__button">
          <MainButton
            {...{
              isDisabled: notInStock,
              type: "submit",
              className: "green",
              fontSize: "16px",
              text: "ADD TO CART",
            }}
          />
        </div>
      </form>
    );
  }
}

export default ProductOptions;
