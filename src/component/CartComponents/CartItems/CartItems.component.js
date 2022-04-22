import { PureComponent } from "react";

import AttributeSelector from "../../Shared/AttributeSelector/AttributeSelector.component";
import ProductPrice from "../../Shared/ProductPrice/ProductPrice.component";
import QuantityManager from "../QuantityManager/QuantityManager.component";

import { CartContext } from "../../../store/CartContext";
import "./CartItems.style.scss";

export class CartItems extends PureComponent {
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
    const attributeProps = {
      inStock: product.inStock,
      miniCart: true,
      selectedAttributes: this.props.selectedProduct.selectedAttributes,
    };
    const quantityProps = {
      quantity: this.props.quantity,
      addProduct: this.addProduct,
      removeProduct: this.removeProduct,
    };

    return (
      <div className="cart-items">
        <div className="cart-items__info">
          <span className="cart-items__info-title">{product.brand}</span>

          <span className="cart-items__info-title">{product.name}</span>

          <ProductPrice className="cart-items__info-price" prices={product.prices} />

          {product.attributes.map((item) => (
            <AttributeSelector key={item.id} {...{ ...attributeProps, attribute: item }} />
          ))}
        </div>

        <QuantityManager {...quantityProps} />

        <div className="cart-items__image">
          <img className="cart-items__image-img" src={product.gallery[0]} alt=""></img>
        </div>
      </div>
    );
  }
}

export default CartItems;
