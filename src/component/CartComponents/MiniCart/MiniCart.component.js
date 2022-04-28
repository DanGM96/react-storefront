import { PureComponent } from "react";

import CartItem from "../CartItem/CartItem.component";
import CartTotal from "../CartTotal/CartTotal.component";
import MainButton from "../../Shared/MainButton/MainButton.component";
import CartQuantity from "../CartQuantity/CartQuantity.component";

import history from "../../../util/browserHistory";
import { getLastSegment } from "../../../util/functions";
import { CartContext } from "../../../store/CartContext";
import "./MiniCart.style.scss";

export class MiniCart extends PureComponent {
  static contextType = CartContext;

  constructor(props) {
    super(props);
    this.goToCart = this.goToCart.bind(this);
    this.checkOut = this.checkOut.bind(this);
  }

  goToCart() {
    const notThere = getLastSegment(history.location.pathname) !== "cart";
    if (notThere) {
      history.push("/cart");
    }
    this.props.closeOverlay();
  }

  checkOut() {
    const context = this.context;
    context.checkOut();
  }

  render() {
    return (
      <div className="mini-cart">
        <CartContext.Consumer>
          {(value) => (
            <>
              <CartQuantity
                {...{ text: "My Bag", value: value.totalQuantity, className: "mini" }}
              />

              <div className="mini-cart__items">
                {value.cart.map((item, index) => (
                  <CartItem key={index} {...{ ...item, className: "mini" }} />
                ))}
              </div>

              <CartTotal {...{ cart: value.cart, text: "Total", className: "mini" }} />
            </>
          )}
        </CartContext.Consumer>

        <div className="mini-cart__buttons">
          <MainButton
            {...{
              className: "white",
              fontSize: "14px",
              text: "VIEW BAG",
              onClick: this.goToCart,
            }}
          />

          <MainButton
            {...{ className: "green", fontSize: "14px", text: "CHECK OUT", onClick: this.checkOut }}
          />
        </div>
      </div>
    );
  }
}

export default MiniCart;
