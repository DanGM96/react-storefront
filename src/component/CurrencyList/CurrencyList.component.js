import { PureComponent } from "react";
import CurrencyButton from "../CurrencyButton/CurrencyButton.component";

import "./CurrencyList.style.scss";

export class CurrencyList extends PureComponent {
  render() {
    return (
      <div className="currency-list">
        {this.props.currencies.map((currency) => (
          <CurrencyButton key={currency.label} currency={currency} />
        ))}
      </div>
    );
  }
}

export default CurrencyList;
