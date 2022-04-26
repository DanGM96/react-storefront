import { PureComponent } from "react";
import { NavLink } from "react-router-dom";

import "./CategoryButton.style.scss";

export class CategoryButton extends PureComponent {
  render() {
    return (
      <NavLink
        end
        className={({ isActive }) =>
          `category-button ${isActive ? "category-button--selected" : ""}`
        }
        name={this.props.name}
        to={`/${this.props.name}`}
      >
        {this.props.name}
      </NavLink>
    );
  }
}

export default CategoryButton;
