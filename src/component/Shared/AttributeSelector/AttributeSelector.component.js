import { PureComponent } from "react";

import AttributeButton from "../../Shared/AttributeButton/AttributeButton.component";

import { isSwatch } from "../../../util/functions";
import "./AttributeSelector.style.scss";

export class AttributeSelector extends PureComponent {
  isSelectedValue(itemId) {
    const selectedAttr = this.props.selectedAttributes;
    if (!selectedAttr) return false;

    const attrId = this.props.attribute.id;
    return selectedAttr[attrId] === itemId;
  }

  isDefaultChecked(itemId, itemIndex) {
    const isSelectedValue = this.isSelectedValue(itemId);
    const isIndexZero = itemIndex === 0 && this.props.isEnabled;
    return isSelectedValue || isIndexZero;
  }

  render() {
    const attribute = this.props.attribute;
    const isEnabled = this.props.isEnabled;
    const className = this.props.className;

    return (
      <div className={"attribute-selector attribute-selector-" + className}>
        <span className={"attribute-selector__label attribute-selector-" + className + "__label"}>
          {attribute.name}:
        </span>

        <div
          className={"attribute-selector__options attribute-selector-" + className + "__options"}
        >
          {attribute.items.map((item, index) => {
            const props = {
              isDefaultChecked: this.isDefaultChecked(item.id, index),
              isSwatch: isSwatch(attribute.type),
              isEnabled: isEnabled,
              className: className,
              id: attribute.id,
              item: item,
            };

            return <AttributeButton key={item.id} {...props} />;
          })}
        </div>
      </div>
    );
  }
}

export default AttributeSelector;
