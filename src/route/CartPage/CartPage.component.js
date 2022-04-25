import { PureComponent } from "react";

import BigCart from "../../component/CartComponents/BigCart/BigCart.component";
import PageTitle from "../../component/Shared/PageTitle/PageTitle.component";

import "./CartPage.style.scss";

export class CartPage extends PureComponent {
  render() {
    return (
      <div className="cart-page">
        <PageTitle text="CART" className="cart" />
        <BigCart />
      </div>
    );
  }
}

export default CartPage;
