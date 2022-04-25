import { PureComponent } from "react";
import { Link } from "react-router-dom";

import AttributeSelector from "../../Shared/AttributeSelector/AttributeSelector.component";
import ProductPrice from "../../Shared/ProductPrice/ProductPrice.component";
import QuantityManager from "../QuantityManager/QuantityManager.component";
import ProductName from "../../Shared/ProductName/ProductName.component";
import CartImage from "../CartImage/CartImage.component";

import { CartContext } from "../../../store/CartContext";
import "./CartItem.style.scss";

export class CartItem extends PureComponent {
  static contextType = CartContext;

  constructor(props) {
    super(props);
    this.addProduct = this.addProduct.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
  }

  addProduct() {
    const context = this.context;
    context.addProduct(this.props.selectedProduct);
  }

  removeProduct() {
    const context = this.context;
    context.removeProduct(this.props.selectedProduct);
  }

  render() {
    const product = this.props.selectedProduct.product;
    const className = this.props.className;
    const attributeProps = {
      isEnabled: false,
      className: className,
      selectedAttributes: this.props.selectedProduct.selectedAttributes,
    };
    const quantityProps = {
      className: className,
      quantity: this.props.quantity,
      addProduct: this.addProduct,
      removeProduct: this.removeProduct,
    };

    return (
      <div className={"cart-item cart-item-" + className}>
        <div className={"cart-item__info cart-item-" + className + "__info"}>
          <Link to={`/${product.category}/${product.id}`}>
            <ProductName {...{ brand: product.brand, name: product.name, className: className }} />
          </Link>

          <ProductPrice {...{ prices: product.prices, className: className }} />

          {product.attributes.map((item) => (
            <AttributeSelector key={item.id} {...{ ...attributeProps, attribute: item }} />
          ))}
        </div>

        <QuantityManager {...quantityProps} />

        <CartImage {...{ gallery: product.gallery, className: className }} />
      </div>
    );
  }
}

export default CartItem;
