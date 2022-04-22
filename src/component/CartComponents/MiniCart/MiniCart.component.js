import { PureComponent } from "react";

import CartItems from "../CartItems/CartItems.component";
import CartTotal from "../CartTotal/CartTotal.component";
import MainButton from "../../Shared/MainButton/MainButton.component";

import history from "../../../util/browserHistory";
import { getLastSegment } from "../../../util/functions";
import { CartContext } from "../../../store/CartContext";
import "./MiniCart.style.scss";
import MiniCartTitle from "../MiniCartTitle/MiniCartTitle.component";

export class MiniCart extends PureComponent {
  constructor(props) {
    super(props);
    this.goToCart = this.goToCart.bind(this);
  }

  goToCart() {
    const notThere = getLastSegment(history.location.pathname) !== "cart";

    this.props.handleClick();

    if (notThere) {
      history.push("/cart");
    }
  }

  render() {
    return (
      <div className="mini-cart">
        <CartContext.Consumer>
          {(value) => (
            <>
              <MiniCartTitle totalQuantity={value.totalQuantity} />

              {value.cart.map((item, index) => {
                return <CartItems key={index} {...item} />;
              })}

              <CartTotal cart={value.cart} />
            </>
          )}
        </CartContext.Consumer>

        <div className="mini-cart__buttons">
          <MainButton {...{ type: "button", primary: false, onClick: this.goToCart }}>
            VIEW BAG
          </MainButton>

          <MainButton {...{ type: "button", primary: true }}>CHECK OUT</MainButton>
        </div>
      </div>
    );
  }
}

export default MiniCart;
