import { PureComponent } from "react";

import "./AttributeButton.style.scss";

export class AttributeButton extends PureComponent {
  render() {
    const item = this.props.item;
    const disabled = !this.props.enabled;

    let value = item.value;
    let backgroundColor = "";
    let selectedClass = "attribute-button--selected";

    if (this.props.isSwatch) {
      value = "";
      backgroundColor = item.value;
      selectedClass += "-swatch";
    }

    return (
      <label>
        <input
          type={"radio"}
          name={disabled ? null : this.props.id}
          value={item.id}
          defaultChecked={this.props.defaultChecked}
          disabled={disabled}
        />

        <div
          className={`attribute-button ${selectedClass} 
            ${disabled ? "attribute-button--unavailable" : ""}
            ${this.props.miniCart ? "attribute-button-mini" : ""}
            `}
          style={{ backgroundColor: backgroundColor }}
          title={this.props.item.displayValue}
        >
          {value}
        </div>
      </label>
    );
  }
}

export default AttributeButton;
