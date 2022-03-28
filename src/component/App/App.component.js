import { PureComponent } from "react";
import { Route, Routes } from "react-router-dom";

import AppRouter from "../AppRouter/AppRouter.component";
import NavigationBar from "../NavigationBar/NavigationBar.component";
import Cart from "../../route/CartPage/CartPage.component";
import Home from "../../route/HomePage/HomePage.component";

export class App extends PureComponent {
  render() {
    return (
      <AppRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </AppRouter>
    );
  }
}

export default App;
