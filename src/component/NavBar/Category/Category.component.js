import { PureComponent } from "react";
import { NavLink } from "react-router-dom";

import { classNames } from "../../../util/functions";
import "./Category.style.scss";

export class Category extends PureComponent {
  render() {
    return (
      <NavLink
        className={({ isActive }) =>
          classNames("category", {
            "category--selected": isActive,
          })
        }
        name={this.props.name}
        to={`/${this.props.name}`}
      >
        {this.props.name}
      </NavLink>
    );
  }
}

export default Category;
