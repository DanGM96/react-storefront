import { PureComponent } from "react";
import { Navigate } from "react-router-dom";

import "./HomePage.style.scss";

export default class Home extends PureComponent {
  render() {
    return <div>{this.props.address && <Navigate to={`/${this.props.address}`} replace />}</div>;
  }
}
