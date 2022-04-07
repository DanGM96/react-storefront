import { PureComponent } from "react";

import { ReactComponent as Arrow } from "../../asset/icons/arrow-down.svg";
import CurrencyList from "../CurrencyList/CurrencyList.component";

import SelectorsQuery from "../../query/Selectors.query";
import { classNames } from "../../util/functions";
import { CurrencyContext } from "../../store/CurrencyContext";
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

  selectedClass(className) {
    return classNames(className, {
      [className + "--selected"]: this.state.isSelected,
    });
  }

  componentDidMount() {
    const context = this.context;

    SelectorsQuery.data.then(({ currencies }) => {
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
      <>
        <div className={this.selectedClass("currency-selector")} onClick={this.handleClick}>
          {isSelected && <div className="currency-selector__wall" />}

          {isSelected && <CurrencyList currencies={currencies} />}

          <div className={"currency-selector__group"}>
            <CurrencyContext.Consumer>
              {(value) => <span>{value.currency.symbol}</span>}
            </CurrencyContext.Consumer>

            <Arrow className={this.selectedClass("currency-selector__group__arrow")} />
          </div>
        </div>
      </>
    );
  }
}

export default CurrencySelector;
