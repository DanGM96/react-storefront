import { PureComponent } from "react";
import { Navigate } from "react-router-dom";

import "./HomePage.style.scss";

export class HomePage extends PureComponent {
  render() {
    return <Navigate to={`/${this.props.redirect}`} replace />;
  }
}

export default HomePage;
