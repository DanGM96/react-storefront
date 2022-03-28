import React from "react";

import { classNames } from "../../util/functions";
import history from "../../util/browserHistory";
import { ReactComponent as Cart } from "../../asset/icons/cart.svg";

import "./CartSelector.style.scss";

export class CartSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: this.isSelected(history.location),
    };
  }

  isSelected(location) {
    return location.pathname === "/cart";
  }

  updateSelected(update) {
    this.setState({
      isSelected: this.isSelected(update.location),
    });
  }

  componentDidMount() {
    this.unlisten = history.listen((update) => this.updateSelected(update));
  }

  componentWillUnmount() {
    this.unlisten();
  }

  render() {
    return (
      <div
        className={classNames("cart-selector", {
          "cart-selector--selected": this.state.isSelected,
        })}
      >
        <Cart />
      </div>
    );
  }
}

export default CartSelector;
