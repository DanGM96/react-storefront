import { PureComponent } from "react";
import AttributeButton from "../AttributeButton/AttributeButton.component";

import "./AttributeSelector.style.scss";

export class AttributeSelector extends PureComponent {
  constructor(props) {
    super(props);
    this.isSwatch = this.isSwatch.bind(this);
  }

  isSwatch() {
    return this.props.attribute.type === "swatch";
  }

  render() {
    return (
      <>
        <span className="attribute-selector__label">{this.props.attribute.name}:</span>
        <div className="attribute-selector__options">
          {this.props.attribute.items.map((item, index) => {
            const checked = index === 0 ? true : false;
            const props = { isSwatch: this.isSwatch(), id: this.props.attribute.id, item, checked };
            return <AttributeButton key={item.id} {...props} isSwatch={this.isSwatch()} />;
          })}
        </div>
      </>
    );
  }
}

export default AttributeSelector;
