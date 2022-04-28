import { PureComponent } from "react";
import FocusHandler from "../../Shared/FocusHandler/FocusHandler.component";

import ProductOptions from "../../Shared/ProductOptions/ProductOptions.component";
import ProductRequest from "../../Shared/ProductRequest/ProductRequest.component";

import "./ProductShortcut.style.scss";

export class ProductShortcut extends PureComponent {
  render() {
    return (
      <div className="product-shortcut">
        <FocusHandler onBlur={this.props.onBlur} withColor={true}>
          <div className="product-shortcut__card">
            <ProductRequest id={this.props.id}>
              <ProductOptions />
            </ProductRequest>
          </div>
        </FocusHandler>
      </div>
    );
  }
}

export default ProductShortcut;
