import { PureComponent } from "react";

import "./AttributeButton.style.scss";

export class AttributeButton extends PureComponent {
  render() {
    const item = this.props.item;
    const notInStock = !this.props.inStock;

    let value = item.value;
    let backgroundColor = "";
    let selectedClass = "attribute-button--selected";

    if (this.props.isSwatch) {
      value = "";
      backgroundColor = item.value;
      selectedClass = "attribute-button--selected-swatch";
    }

    return (
      <label>
        <input
          type={"radio"}
          name={this.props.id}
          value={item.id}
          defaultChecked={this.props.checked}
          disabled={notInStock}
        />
        <div
          className={`attribute-button ${selectedClass} 
            ${notInStock ? "attribute-button--unavailable" : ""}`}
          style={{ backgroundColor: backgroundColor }}
          key={this.props.item.id}
        >
          {value}
        </div>
      </label>
    );
  }
}

export default AttributeButton;
