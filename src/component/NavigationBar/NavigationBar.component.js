import { PureComponent } from "react";

import Categories from "../Categories/Categories.component";
import Selectors from "../Selectors/Selectors.component";
import { ReactComponent as Logo } from "../../asset/icons/logo.svg";

import "./NavigationBar.style.scss";

export class NavigationBar extends PureComponent {
  render() {
    return (
      <div className="navigation-bar">
        <Categories />
        <Logo className="navigation-bar-logo" />
        <Selectors />
      </div>
    );
  }
}

export default NavigationBar;
