import React from "react";

import Categories from "../Categories/Categories.component";
import Selectors from "../Selectors/Selectors.component";
import { ReactComponent as Logo } from "../../asset/icons/logo.svg";

import "./NavBar.style.scss";

export class NavBarContainer extends React.Component {
  render() {
    return (
      <div className="nav-bar">
        <Categories />
        <Logo className="nav-bar-logo" />
        <Selectors />
      </div>
    );
  }
}

export default NavBarContainer;
