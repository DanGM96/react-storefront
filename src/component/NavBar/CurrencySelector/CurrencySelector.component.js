import { createRef, PureComponent } from "react";

import { ReactComponent as Arrow } from "../../../asset/icons/arrow-down.svg";
import FocusHandler from "../../Shared/FocusHandler/FocusHandler.component";
import CurrencyList from "../CurrencyList/CurrencyList.component";

import { CurrencyContext } from "../../../store/CurrencyContext";
import "./CurrencySelector.style.scss";

export class CurrencySelector extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
    };
    this.openOverlay = this.openOverlay.bind(this);
    this.closeOverlay = this.closeOverlay.bind(this);
    this.currencyRef = createRef();
    this.skip = false;
  }

  openOverlay() {
    if (this.skip) {
      this.skip = false;
      return;
    }
    this.setState({ isSelected: true });
  }

  closeOverlay(element) {
    const cartClicked = this.currencyRef.current.contains(element);
    this.skip = cartClicked;

    this.setState({ isSelected: false });
  }

  render() {
    const isSelected = this.state.isSelected;

    return (
      <div className={"currency-selector"}>
        <div
          className={"currency-selector__group"}
          ref={this.currencyRef}
          onClick={this.openOverlay}
        >
          <span>
            <CurrencyContext.Consumer>{(value) => value.currency.symbol}</CurrencyContext.Consumer>
          </span>

          <Arrow
            className={`currency-selector__group-arrow 
              ${this.state.isSelected ? "currency-selector__group-arrow--selected" : ""}`}
          />
        </div>

        {isSelected && (
          <FocusHandler onBlur={this.closeOverlay}>
            <CurrencyList />
          </FocusHandler>
        )}
      </div>
    );
  }
}

export default CurrencySelector;
