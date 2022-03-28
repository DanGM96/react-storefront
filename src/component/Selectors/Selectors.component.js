import React from "react";

import CartSelector from "../CartSelector/CartSelector.component";
import CurrencySelector from "../CurrencySelector/CurrencySelector.component";

import "./Selectors.style.scss";

export class Selectors extends React.Component {
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
