import { PureComponent } from "react";

import { ReactComponent as Arrow } from "../../../asset/icons/arrow-down.svg";
import CurrencyList from "../CurrencyList/CurrencyList.component";

import SelectorsQuery from "../../../query/Selectors.query";
import { CurrencyContext } from "../../../store/CurrencyContext";
import "./CurrencySelector.style.scss";

export class CurrencySelector extends PureComponent {
  static contextType = CurrencyContext;

  constructor(props) {
    super(props);
    this.state = {
      currencies: [],
      isSelected: false,
      currency: {},
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const context = this.context;

    SelectorsQuery.getData().then(({ currencies }) => {
      this.setState({
        currencies: currencies,
      });

      if (localStorage.getItem("currency") === null) {
        localStorage.setItem("currency", JSON.stringify(currencies[0]));
      }

      this.setState({ currency: JSON.parse(localStorage.getItem("currency")) });
      context.setCurrency(this.state.currency);
    });
  }

  handleClick() {
    this.setState({ isSelected: !this.state.isSelected });
  }

  render() {
    const isSelected = this.state.isSelected;
    const currencies = this.state.currencies;

    return (
      <div className={"currency-selector"} onClick={this.handleClick}>
        {isSelected && <div className="currency-selector__overlay" />}

        {isSelected && <CurrencyList currencies={currencies} />}

        <div className={"currency-selector__group"}>
          <CurrencyContext.Consumer>
            {(value) => <span>{value.currency.symbol}</span>}
          </CurrencyContext.Consumer>

          <Arrow
            className={`currency-selector__group-arrow 
              ${this.state.isSelected && "currency-selector__group-arrow--selected"}`}
          />
        </div>
      </div>
    );
  }
}

export default CurrencySelector;
