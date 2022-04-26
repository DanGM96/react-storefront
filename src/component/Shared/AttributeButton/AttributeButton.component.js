import { PureComponent } from "react";

import { calcFontSize, hexToRgba } from "../../../util/functions";
import "./AttributeButton.style.scss";

export class AttributeButton extends PureComponent {
  render() {
    const isDisabled = !this.props.isEnabled;
    const item = this.props.item;
    const className = this.props.className;
    const isDefaultChecked = this.props.isDefaultChecked;

    let value;
    let fontSize;
    let backgroundColor;
    let classSelected = "attribute-button--selected";

    if (this.props.isSwatch) {
      classSelected += "-swatch";
      backgroundColor = isDisabled && !isDefaultChecked ? hexToRgba(item.value, 0.6) : item.value;
    } else {
      value = item.value;
      fontSize = className === "mini" ? calcFontSize(value, 14) : "16px";
    }

    return (
      <label>
        <input
          type={"radio"}
          name={isDisabled ? null : this.props.id}
          value={item.id}
          defaultChecked={isDefaultChecked}
          disabled={isDisabled}
        />

        <div
          className={`attribute-button attribute-button-${className} ${classSelected}`}
          style={{ backgroundColor: backgroundColor, fontSize: fontSize }}
          title={this.props.item.displayValue}
        >
          {value}
        </div>
      </label>
    );
  }
}

export default AttributeButton;
