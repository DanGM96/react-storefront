import { PureComponent } from "react";
import { CurrencyContext } from "../../store/CurrencyContext";

import "./CurrencyButton.style.scss";

export class CurrencyButton extends PureComponent {
  static contextType = CurrencyContext;

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const context = this.context;
    localStorage.setItem("currency", JSON.stringify(this.props.currency));
    context.setCurrency(this.props.currency);
  }

  render() {
    return (
      <div className="currency-button" onClick={this.handleClick}>
        <span>{this.props.currency.symbol}</span>
        &nbsp;
        <span>{this.props.currency.label}</span>
      </div>
    );
  }
}

export default CurrencyButton;
