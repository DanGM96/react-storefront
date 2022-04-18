import { PureComponent } from "react";

import Overlay from "../../Shared/Overlay/Overlay.component";
import ProductOptions from "../../Shared/ProductOptions/ProductOptions.component";
import ProductRequest from "../../Shared/ProductRequest/ProductRequest.component";

import "./ProductShortcut.style.scss";

export class ProductShortcut extends PureComponent {
  render() {
    return (
      <div className="product-shortcut">
        <div onClick={this.props.closeShortcut}>
          <Overlay withColor={true} />
        </div>
        <div className="product-shortcut__card">
          <ProductRequest id={this.props.id}>
            <ProductOptions />
          </ProductRequest>
        </div>
      </div>
    );
  }
}

export default ProductShortcut;
