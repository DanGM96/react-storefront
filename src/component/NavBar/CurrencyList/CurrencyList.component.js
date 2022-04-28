import { PureComponent } from "react";
import CurrencyButton from "../CurrencyButton/CurrencyButton.component";

import SelectorsQuery from "../../../query/Selectors.query";
import "./CurrencyList.style.scss";

export class CurrencyList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currencies: [],
    };
  }

  componentDidMount() {
    SelectorsQuery.getData().then(({ currencies }) => {
      this.setState({ currencies: currencies });
    });
  }

  render() {
    return (
      <div className="currency-list">
        {this.state.currencies.map((currency) => (
          <CurrencyButton key={currency.label} currency={currency} />
        ))}
      </div>
    );
  }
}

export default CurrencyList;
