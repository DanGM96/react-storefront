import { Fragment, PureComponent } from "react";

import { ReactComponent as Arrow } from "../../../asset/icons/arrow-down.svg";
import CurrencyList from "../CurrencyList/CurrencyList.component";
import Overlay from "../../Shared/Overlay/Overlay.component";

import SelectorsQuery from "../../../query/Selectors.query";
import { CurrencyContext } from "../../../store/CurrencyContext";
import "./CurrencySelector.style.scss";

export class CurrencySelector extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currencies: [],
      isSelected: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    SelectorsQuery.getData().then(({ currencies }) => {
      this.setState({
        currencies: currencies,
      });
    });
  }

  handleClick() {
    this.setState((state) => ({ isSelected: !state.isSelected }));
  }

  render() {
    const isSelected = this.state.isSelected;
    const currencies = this.state.currencies;

    return (
      <>
        <div className={"currency-selector"} onClick={this.handleClick}>
          {isSelected && <Overlay />}

          <div className={"currency-selector__group"}>
            <span>
              <CurrencyContext.Consumer>
                {(value) => value.currency.symbol}
              </CurrencyContext.Consumer>
            </span>

            <Arrow
              className={`currency-selector__group-arrow 
              ${this.state.isSelected ? "currency-selector__group-arrow--selected" : ""}`}
            />
          </div>
        </div>

        {isSelected && <CurrencyList currencies={currencies} />}
      </>
    );
  }
}

export default CurrencySelector;
