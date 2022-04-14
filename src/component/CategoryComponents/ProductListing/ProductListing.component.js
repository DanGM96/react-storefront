import { PureComponent } from "react";
import ProductCard from "../ProductCard/ProductCard.component";

import "./ProductListing.style.scss";

export class ProductListing extends PureComponent {
  render() {
    return (
      <div className="product-listing">
        {this.props.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  }
}

export default ProductListing;
