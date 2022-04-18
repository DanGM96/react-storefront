import { cloneElement, PureComponent } from "react";

import ProductQuery from "../../../query/Product.query";
import "./ProductRequest.style.scss";

export class ProductRequest extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
    };
  }

  componentDidMount() {
    const query = new ProductQuery(this.props.id);
    query.getData().then(({ product }) => this.setState({ product: product }));
  }

  render() {
    return (
      <>
        {this.state.product.name &&
          cloneElement(this.props.children, { product: this.state.product })}
      </>
    );
  }
}

export default ProductRequest;
