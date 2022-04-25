import { PureComponent } from "react";

import "./AttributeButton.style.scss";

export class AttributeButton extends PureComponent {
  render() {
    const isDisabled = !this.props.isEnabled;
    const item = this.props.item;
    const className = this.props.className;

    let value = item.value;
    let backgroundColor = "";
    let classSelected = "attribute-button--selected";

    if (this.props.isSwatch) {
      value = "";
      backgroundColor = item.value;
      classSelected += "-swatch";
    }

    return (
      <label>
        <input
          type={"radio"}
          name={isDisabled ? null : this.props.id}
          value={item.id}
          defaultChecked={this.props.isDefaultChecked}
          disabled={isDisabled}
        />

        <div
          className={`attribute-button attribute-button-${className} ${classSelected}`}
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
