import { PureComponent } from "react";
import { CurrencyContext } from "../../../store/CurrencyContext";

import "./CurrencyButton.style.scss";

export class CurrencyButton extends PureComponent {
  static contextType = CurrencyContext;

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const context = this.context;
    context.updateCurrency(this.props.currency);
  }

  render() {
    return (
      <div className="currency-button" onClick={this.handleClick}>
        <span className="currency-button__symbol">{this.props.currency.symbol}</span>
        &nbsp;
        <span className="currency-button__label">{this.props.currency.label}</span>
      </div>
    );
  }
}

export default CurrencyButton;
