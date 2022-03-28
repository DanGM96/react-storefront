import React from "react";
import { Route, Routes } from "react-router-dom";

import AppRouter from "../AppRouter/AppRouter.component";
import NavBarContainer from "../NavBar/NavBar.component";
import Cart from "../../route/CartPage/CartPage.component";
import Home from "../../route/HomePage/HomePage.component";

export class App extends React.Component {
  render() {
    return (
      <AppRouter>
        <NavBarContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </AppRouter>
    );
  }
}

export default App;
