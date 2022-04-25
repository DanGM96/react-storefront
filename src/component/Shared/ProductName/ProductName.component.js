import { PureComponent } from "react";

import "./ProductName.style.scss";

export class ProductName extends PureComponent {
  render() {
    const className = this.props.className;

    return (
      <div className={"product-name-" + className}>
        <span className={"product-name__brand product-name-" + className + "__brand"}>
          {this.props.brand + " "}
        </span>
        <span className={"product-name__name product-name-" + className + "__name"}>
          {this.props.name}
        </span>
      </div>
    );
  }
}

export default ProductName;
