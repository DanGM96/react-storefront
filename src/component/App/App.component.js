import { PureComponent } from "react";
import { Route, Routes } from "react-router-dom";

import AppRouter from "../Shared/AppRouter/AppRouter.component";
import NavigationBar from "../NavBar/NavigationBar/NavigationBar.component";
import Cart from "../../route/CartPage/CartPage.component";
import Home from "../../route/HomePage/HomePage.component";
import CategoryPage from "../../route/CategoryPage/CategoryPage.component";
import ProductPage from "../../route/ProductPage/ProductPage.component";
import CartContextProvider from "../Shared/CartContextProvider/CartContextProvider.component";
import CurrencyContextProvider from "../Shared/CurrencyContextProvider/CurrencyContextProvider.component";

import SelectorsQuery from "../../query/Selectors.query";

export class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      firstCategory: null,
    };
  }

  componentDidMount() {
    SelectorsQuery.getData().then(({ categories }) =>
      this.setState({ firstCategory: categories[0].name })
    );
  }

  render() {
    return (
      this.state.firstCategory && (
        <AppRouter>
          <CartContextProvider>
            <CurrencyContextProvider>
              <NavigationBar />
              <Routes>
                <Route path="/" element={<Home redirect={this.state.firstCategory} />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/:category" element={<CategoryPage />} />
                <Route path="/:category/:id" element={<ProductPage />} />
              </Routes>
            </CurrencyContextProvider>
          </CartContextProvider>
        </AppRouter>
      )
    );
  }
}

export default App;
