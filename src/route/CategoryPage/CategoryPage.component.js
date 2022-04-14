import { PureComponent } from "react";
import { Navigate } from "react-router-dom";
import ProductListing from "../../component/CategoryComponents/ProductListing/ProductListing.component";
import { Title } from "../../component/CategoryComponents/Title/Title.component";

import CategoryQuery from "../../query/Category.query";
import history from "../../util/browserHistory";
import "./CategoryPage.style.scss";

export class CategoryPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      title: this.getLastSegment(history.location.pathname),
      category: {},
    };
  }

  getLastSegment(path) {
    return path.substring(path.lastIndexOf("/") + 1);
  }

  updateTitle(update) {
    this.setState({
      title: this.getLastSegment(update.location.pathname),
    });
  }

  updateProducts() {
    const query = new CategoryQuery(this.state.title);
    query.getData().then(({ category }) => this.setState({ category: category }));
  }

  componentDidMount() {
    this.unlisten = history.listen((update) => this.updateTitle(update));
    this.updateProducts();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.title !== this.state.title) {
      this.updateProducts();
    }
  }

  componentWillUnmount() {
    this.unlisten();
  }

  render() {
    // this.props.categories.includes(this.state.title) ? :  // check if page is valid
    return (
      <div className="category-page">
        <Title id={this.state.title} />
        {this.state.category.products && <ProductListing products={this.state.category.products} />}
      </div>
    );
  }
}

export default CategoryPage;
