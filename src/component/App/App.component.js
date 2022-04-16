import { PureComponent } from "react";
import { Route, Routes } from "react-router-dom";

import AppRouter from "../Shared/AppRouter/AppRouter.component";
import NavigationBar from "../NavBar/NavigationBar/NavigationBar.component";
import Cart from "../../route/CartPage/CartPage.component";
import Home from "../../route/HomePage/HomePage.component";
import CategoryPage from "../../route/CategoryPage/CategoryPage.component";
import ProductPage from "../../route/ProductPage/ProductPage.component";

import SelectorsQuery from "../../query/Selectors.query";
import { CurrencyContext } from "../../store/CurrencyContext";

export class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
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
        categories: categories.map(({ name }) => name),
      });
    });
  }

  render() {
    return (
      <>
        {
          this.state.categories[0] && (
            <CurrencyContext.Provider value={this.state}>
              <AppRouter>
                <NavigationBar />
                <Routes>
                  <Route path="/" element={<Home redirect={this.state.categories[0]} />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route
                    path="/:category"
                    element={<CategoryPage categories={this.state.categories} />}
                  />
                  <Route
                    path="/:category/:id"
                    element={<ProductPage categories={this.state.categories} />}
                  />
                </Routes>
              </AppRouter>
            </CurrencyContext.Provider>
          )
          // TODO: ErrorPage
        }
      </>
    );
  }
}

export default App;
