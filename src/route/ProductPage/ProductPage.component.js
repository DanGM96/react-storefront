import { PureComponent } from "react";

import ProductContainer from "../../component/ProductComponents/ProductContainer/ProductContainer.component";
import ProductRequest from "../../component/Shared/ProductRequest/ProductRequest.component";

import history from "../../util/browserHistory";
import { getLastSegment } from "../../util/functions";
import "./ProductPage.style.scss";

export class ProductPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      id: getLastSegment(history.location.pathname),
    };
  }

  render() {
    return (
      <div className="product-page">
        <ProductRequest id={this.state.id}>
          <ProductContainer />
        </ProductRequest>
      </div>
    );
  }
}

export default ProductPage;
