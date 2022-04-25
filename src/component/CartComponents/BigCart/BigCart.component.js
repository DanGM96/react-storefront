import { PureComponent } from "react";

import CartItem from "../CartItem/CartItem.component";
import CartTotal from "../CartTotal/CartTotal.component";
import MainButton from "../../Shared/MainButton/MainButton.component";
import CartQuantity from "../CartQuantity/CartQuantity.component";

import { CartContext } from "../../../store/CartContext";
import "./BigCart.style.scss";

export class BigCart extends PureComponent {
  static contextType = CartContext;

  constructor(props) {
    super(props);
    this.checkOut = this.checkOut.bind(this);
  }

  checkOut() {
    const context = this.context;
    context.checkOut();
  }

  render() {
    return (
      <div className="big-cart">
        <CartContext.Consumer>
          {(value) => (
            <>
              <div className="big-cart__items">
                {value.cart.map((item, index) => {
                  return <CartItem key={index} {...{ ...item, className: "big" }} />;
                })}
              </div>
              <div className="big-cart__values">
                <CartTotal
                  {...{ cart: value.cart, taxRate: 0.075, text: "Tax", className: "big-tax" }}
                />

                <CartQuantity
                  {...{ text: "Qty: ", value: value.totalQuantity, className: "big" }}
                />

                <CartTotal {...{ cart: value.cart, text: "Total", className: "big" }} />
              </div>
            </>
          )}
        </CartContext.Consumer>

        <div className="big-cart__button">
          <MainButton
            {...{ className: "green", fontSize: "14px", text: "ORDER", onClick: this.checkOut }}
          />
        </div>
      </div>
    );
  }
}

export default BigCart;
