import { PureComponent } from "react";

import Category from "../Category/Category.component";

import "./Categories.style.scss";

export class Categories extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      categories: [{ name: "women" }, { name: "men" }, { name: "kids" }],
    };
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
