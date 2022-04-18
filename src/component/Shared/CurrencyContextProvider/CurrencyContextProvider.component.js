import { PureComponent } from "react";

import { CurrencyContext } from "../../../store/CurrencyContext";
import SelectorsQuery from "../../../query/Selectors.query";

export class CurrencyContextProvider extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currency: {},
      updateCurrency: this.updateCurrency.bind(this),
    };
  }

  updateCurrency(currency) {
    localStorage.setItem("currency", JSON.stringify(currency));
    this.setState({ currency: currency });
  }

  componentDidMount() {
    let currency = JSON.parse(localStorage.getItem("currency"));
    if (currency === null) {
      SelectorsQuery.getData().then(({ currencies }) => {
        currency = currencies[0];
      });
    }
    this.updateCurrency(currency);
  }

  render() {
    return (
      <CurrencyContext.Provider value={this.state}>{this.props.children}</CurrencyContext.Provider>
    );
  }
}

export default CurrencyContextProvider;
