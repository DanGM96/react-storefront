import { PureComponent } from "react";

import "./MainButton.style.scss";

export class MainButton extends PureComponent {
  render() {
    return (
      <button
        className={`
            main-button 
            ${this.props.primary ? "main-button-primary" : "main-button-secondary"}
            ${this.props.disabled ? "main-button--disabled" : ""}
            `}
        type={this.props.type}
        disabled={this.props.disabled}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </button>
    );
  }
}

export default MainButton;
