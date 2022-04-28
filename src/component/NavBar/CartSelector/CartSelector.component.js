import { createRef, PureComponent } from "react";

import { ReactComponent as CartIcon } from "../../../asset/icons/cart.svg";
import FocusHandler from "../../Shared/FocusHandler/FocusHandler.component";
import MiniCart from "../../CartComponents/MiniCart/MiniCart.component";

import { CartContext } from "../../../store/CartContext";
import { calcFontSize } from "../../../util/functions";
import "./CartSelector.style.scss";

export class CartSelector extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
    };
    this.openOverlay = this.openOverlay.bind(this);
    this.closeOverlay = this.closeOverlay.bind(this);
    this.cartRef = createRef();
    this.skip = false;
  }

  openOverlay() {
    if (this.skip) {
      this.skip = false;
      return;
    }
    this.setState({ isSelected: true });
  }

  closeOverlay(element) {
    const cartClicked = this.cartRef.current.contains(element);
    this.skip = cartClicked;

    this.setState({ isSelected: false });
  }

  render() {
    const isSelected = this.state.isSelected;

    return (
      <div className="cart-selector">
        <div className={"cart-selector__group"} ref={this.cartRef} onClick={this.openOverlay}>
          <CartIcon />

          <CartContext.Consumer>
            {(value) => {
              const quantity = value.totalQuantity;
              return (
                quantity > 0 && (
                  <div className="cart-selector__group-quantity">
                    <span
                      className="cart-selector__group-quantity-text"
                      style={{ fontSize: calcFontSize(quantity, 14) }}
                    >
                      {quantity}
                    </span>
                  </div>
                )
              );
            }}
          </CartContext.Consumer>
        </div>

        {isSelected && (
          <FocusHandler onBlur={this.closeOverlay} withColor={true}>
            <MiniCart closeOverlay={this.closeOverlay} />
          </FocusHandler>
        )}
      </div>
    );
  }
}

export default CartSelector;
