import { PureComponent } from "react";
import { NavLink } from "react-router-dom";

import "./Category.style.scss";

export class Category extends PureComponent {
  render() {
    return (
      <NavLink
        end
        className={({ isActive }) => `category ${isActive && "category--selected"}`}
        name={this.props.name}
        to={`/${this.props.name}`}
      >
        {this.props.name}
      </NavLink>
    );
  }
}

export default Category;
