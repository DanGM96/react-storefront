import { PureComponent } from "react";

import CartSelector from "../CartSelector/CartSelector.component";
import CurrencySelector from "../CurrencySelector/CurrencySelector.component";

import "./Selectors.style.scss";

export class Selectors extends PureComponent {
  render() {
    return (
      <div className="selectors">
        <CurrencySelector />
        <CartSelector />
      </div>
    );
  }
}

export default Selectors;
