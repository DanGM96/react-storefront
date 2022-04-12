import { PureComponent } from "react";
import { Navigate } from "react-router-dom";

import "./HomePage.style.scss";

export class HomePage extends PureComponent {
  render() {
    return <div>{this.props.address && <Navigate to={`/${this.props.address}`} replace />}</div>;
  }
}

export default HomePage;
