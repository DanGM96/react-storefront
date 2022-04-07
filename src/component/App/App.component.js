import { PureComponent } from "react";
import { Route, Routes } from "react-router-dom";

import AppRouter from "../AppRouter/AppRouter.component";
import NavigationBar from "../NavigationBar/NavigationBar.component";
import Cart from "../../route/CartPage/CartPage.component";
import Home from "../../route/HomePage/HomePage.component";
import SelectorsQuery from "../../query/Selectors.query";
import { CurrencyContext } from "../../store/CurrencyContext";

export class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      currency: {},
      setCurrency: this.setCurrency.bind(this),
    };
  }

  setCurrency(currency) {
    this.setState({ currency });
  }

  componentDidMount() {
    SelectorsQuery.getData().then(({ categories }) => {
      this.setState({
        address: categories[0].name,
      });
    });
  }

  render() {
    return (
      <CurrencyContext.Provider value={this.state}>
        <AppRouter>
          <NavigationBar />
          <Routes>
            <Route path="/" element={<Home address={this.state.address} />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </AppRouter>
      </CurrencyContext.Provider>
    );
  }
}

export default App;
