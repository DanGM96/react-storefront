import { PureComponent } from "react";

import { ReactComponent as CartIcon } from "../../../asset/icons/cart.svg";
import Overlay from "../../Shared/Overlay/Overlay.component";
import MiniCart from "../../CartComponents/MiniCart/MiniCart.component";

import { CartContext } from "../../../store/CartContext";
import "./CartSelector.style.scss";

export class CartSelector extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({ isSelected: !state.isSelected }));
  }

  render() {
    const isSelected = this.state.isSelected;

    return (
      <>
        <div className="cart-selector" onClick={this.handleClick}>
          {isSelected && <Overlay withColor={true} />}

          <div className={"cart-selector__group"}>
            <CartIcon />

            <CartContext.Consumer>
              {(value) =>
                value.totalQuantity > 0 && (
                  <div className="cart-selector__group-quantity">
                    <span className="cart-selector__group-quantity-text">
                      {value.totalQuantity}
                    </span>
                  </div>
                )
              }
            </CartContext.Consumer>
          </div>
        </div>

        {isSelected && <MiniCart handleClick={this.handleClick} />}
      </>
    );
  }
}

export default CartSelector;
