import { PureComponent } from "react";

import "./AttributeButton.style.scss";

export class AttributeButton extends PureComponent {
  render() {
    const item = this.props.item;

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
        />
        <div
          className={`attribute-button ${selectedClass}`}
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
