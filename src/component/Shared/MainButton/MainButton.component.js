import { PureComponent } from "react";

import "./MainButton.style.scss";

export class MainButton extends PureComponent {
  render() {
    return (
      <button
        type={this.props.type ?? "button"}
        disabled={this.props.isDisabled}
        onClick={this.props.onClick}
        className={`main-button main-button-${this.props.className}`}
        style={{ fontSize: this.props.fontSize }}
      >
        {this.props.text}
      </button>
    );
  }
}

export default MainButton;
