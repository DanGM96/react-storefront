import { PureComponent } from "react";
import AttributeButton from "../../Shared/AttributeButton/AttributeButton.component";

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
    const attribute = this.props.attribute;
    const inStock = this.props.inStock;

    return (
      <>
        <span className="attribute-selector__label">{attribute.name}:</span>
        <div className="attribute-selector__options">
          {attribute.items.map((item, index) => {
            const checked = index === 0 ? inStock : false;
            const props = {
              isSwatch: this.isSwatch(),
              id: attribute.id,
              item: item,
              checked: checked,
              inStock: inStock,
            };
            return <AttributeButton key={item.id} {...props} />;
          })}
        </div>
      </>
    );
  }
}

export default AttributeSelector;
