import { PureComponent } from "react";

import "./Overlay.style.scss";

export class Overlay extends PureComponent {
  render() {
    return (
      <div
        className={`overlay ${this.props.withColor ? "overlay--color" : ""}`}
        style={this.props.style}
      />
    );
  }
}

export default Overlay;
