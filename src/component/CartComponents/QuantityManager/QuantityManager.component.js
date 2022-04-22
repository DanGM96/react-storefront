import { PureComponent } from "react";

import { ReactComponent as PlusSign } from "../../../asset/icons/plus-sign.svg";
import { ReactComponent as MinusSign } from "../../../asset/icons/minus-sign.svg";

import "./QuantityManager.style.scss";

export class QuantityManager extends PureComponent {
  render() {
    return (
      <div className="quantity-manager">
        <div className="quantity-manager__buttons" onClick={this.props.addProduct}>
          <PlusSign />
        </div>
        <div className="quantity-manager__text">{this.props.quantity}</div>
        <div className="quantity-manager__buttons" onClick={this.props.removeProduct}>
          <MinusSign />
        </div>
      </div>
    );
  }
}

export default QuantityManager;
