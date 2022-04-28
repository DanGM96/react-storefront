import { PureComponent } from "react";

import "./Overlay.style.scss";

export class Overlay extends PureComponent {
  calcOverlayPosition() {
    const position = window.screenY < 80 ? 80 - window.scrollY : 0;
    return `${position}px`;
  }

  render() {
    return (
      <div
        className={`overlay ${this.props.withColor ? "overlay--color" : ""}`}
        style={{ top: this.calcOverlayPosition() }}
      />
    );
  }
}

export default Overlay;
