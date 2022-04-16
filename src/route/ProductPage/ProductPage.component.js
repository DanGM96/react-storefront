import { PureComponent } from "react";
import ProductContainer from "../../component/ProductComponents/ProductContainer/ProductContainer.component";

import ProductQuery from "../../query/Product.query";
import history from "../../util/browserHistory";
import { getLastSegment } from "../../util/functions";
import "./ProductPage.style.scss";

export class ProductPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      id: getLastSegment(history.location.pathname),
      product: {},
    };
  }

  componentDidMount() {
    const query = new ProductQuery(this.state.id);
    query.getData().then(({ product }) => this.setState({ product: product }));
  }

  render() {
    return (
      <div className="product-page">
        {this.state.product.name && <ProductContainer product={this.state.product} />}
      </div>
    );
  }
}

export default ProductPage;
