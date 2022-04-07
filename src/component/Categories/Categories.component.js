import { PureComponent } from "react";

import Category from "../Category/Category.component";

import SelectorsQuery from "../../query/Selectors.query";
import "./Categories.style.scss";

export class Categories extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    SelectorsQuery.data.then((data) => this.setState({ categories: data.categories }));
  }

  render() {
    return (
      <div className="categories">
        {this.state.categories.map(({ name }) => (
          <Category key={name} name={name} />
        ))}
      </div>
    );
  }
}

export default Categories;
