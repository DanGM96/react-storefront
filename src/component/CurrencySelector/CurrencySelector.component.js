import { PureComponent } from "react";

import { ReactComponent as ArrowDown } from "../../asset/icons/arrow-down.svg";

import "./CurrencySelector.style.scss";

export class CurrencySelector extends PureComponent {
  render() {
    return (
      <div className="currency-selector">
        <div>$</div>
        <ArrowDown className="currency-selector__arrow" />
      </div>
    );
  }
}

export default CurrencySelector;
