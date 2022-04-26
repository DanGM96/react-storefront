import { PureComponent } from "react";

import { ReactComponent as PlusSign } from "../../../asset/icons/plus-sign.svg";
import { ReactComponent as MinusSign } from "../../../asset/icons/minus-sign.svg";

import { calcFontSize } from "../../../util/functions";
import "./QuantityManager.style.scss";

export class QuantityManager extends PureComponent {
  render() {
    const className = this.props.className;
    const quantity = this.props.quantity;
    let fontSize = className === "mini" ? calcFontSize(quantity, 16) : "24px";

    return (
      <div className={"quantity-manager quantity-manager-" + className}>
        <div
          className={"quantity-manager__buttons quantity-manager-" + className + "__buttons"}
          onClick={this.props.addProduct}
        >
          <PlusSign />
        </div>
        <div
          className={"quantity-manager__text quantity-manager-" + className + "__text"}
          style={{ fontSize: fontSize }}
        >
          {quantity}
        </div>
        <div
          className={"quantity-manager__buttons quantity-manager-" + className + "__buttons"}
          onClick={this.props.removeProduct}
        >
          <MinusSign />
        </div>
      </div>
    );
  }
}

export default QuantityManager;
