import { PureComponent } from "react";

import ProductListing from "../../component/CategoryComponents/ProductListing/ProductListing.component";
import PageTitle from "../../component/Shared/PageTitle/PageTitle.component";

import CategoryQuery from "../../query/Category.query";
import history from "../../util/browserHistory";
import { getLastSegment } from "../../util/functions";
import "./CategoryPage.style.scss";

export class CategoryPage extends PureComponent {
  unsubscribe = false;
  constructor(props) {
    super(props);
    this.state = {
      title: getLastSegment(history.location.pathname),
      category: {},
    };
  }

  updateTitle(update) {
    if (this.unsubscribe) {
      this.setState({
        title: getLastSegment(update.location.pathname),
      });
    }
  }

  updateProducts() {
    const query = new CategoryQuery(this.state.title);
    query.getData().then(({ category }) => {
      if (this.unsubscribe) {
        this.setState({ category: category });
      }
    });
  }

  componentDidMount() {
    this.unsubscribe = true;
    this.unlisten = history.listen((update) => this.updateTitle(update));
    this.updateProducts();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.title !== this.state.title) {
      this.updateProducts();
    }
  }

  componentWillUnmount() {
    this.unsubscribe = false;
    this.unlisten();
  }

  render() {
    return (
      <div className="category-page">
        <PageTitle text={this.state.title} className="category" />
        {this.state.category.products && <ProductListing products={this.state.category.products} />}
      </div>
    );
  }
}

export default CategoryPage;
