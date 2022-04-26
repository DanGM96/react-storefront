import { PureComponent } from "react";

import CategoryButton from "../CategoryButton/CategoryButton.component";

import SelectorsQuery from "../../../query/Selectors.query";
import "./Categories.style.scss";

export class Categories extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    SelectorsQuery.getData().then(({ categories }) => this.setState({ categories: categories }));
  }

  render() {
    return (
      <div className="categories">
        {this.state.categories.map(({ name }) => (
          <CategoryButton key={name} name={name} />
        ))}
      </div>
    );
  }
}

export default Categories;
