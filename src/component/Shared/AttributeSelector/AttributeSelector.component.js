import { PureComponent } from "react";

import AttributeButton from "../../Shared/AttributeButton/AttributeButton.component";

import { isSwatch } from "../../../util/functions";
import "./AttributeSelector.style.scss";

export class AttributeSelector extends PureComponent {
  selectedAttribute(itemId) {
    if (!this.props.miniCart) return false;

    const attrId = this.props.attribute.id;
    return this.props.selectedAttributes[attrId] === itemId;
  }

  render() {
    const attribute = this.props.attribute;
    const inStock = this.props.inStock;
    const miniCart = this.props.miniCart;

    let cssClass = "attribute-selector";

    if (miniCart) {
      cssClass += "-mini";
    }

    return (
      <div className={cssClass}>
        <span className={cssClass + "__label"}>{attribute.name}:</span>
        <div className={cssClass + "__options"}>
          {attribute.items.map((item, index) => {
            const selected = this.selectedAttribute(item.id);
            const defaultChecked = index === 0 ? inStock : false;
            const props = {
              isSwatch: isSwatch(attribute.type),
              id: attribute.id,
              item: item,
              defaultChecked: miniCart ? selected : defaultChecked,
              enabled: inStock && !miniCart,
              miniCart: miniCart,
            };
            return <AttributeButton key={item.id} {...props} />;
          })}
        </div>
      </div>
    );
  }
}

export default AttributeSelector;
