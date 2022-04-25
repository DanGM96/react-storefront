import { PureComponent } from "react";

import { ReactComponent as Arrow } from "../../../asset/icons/arrow-down.svg";

import "./CartImage.style.scss";

export class CartImage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      imgIndex: 0,
    };
    this.previousImage = this.previousImage.bind(this);
    this.nextImage = this.nextImage.bind(this);
  }

  previousImage() {
    const length = this.props.gallery.length;
    let newIndex = this.state.imgIndex - 1;
    if (newIndex <= -1) {
      newIndex = length - 1;
    }
    this.setState({ imgIndex: newIndex });
  }

  nextImage() {
    const length = this.props.gallery.length;
    let newIndex = this.state.imgIndex + 1;
    if (newIndex >= length) {
      newIndex = 0;
    }
    this.setState({ imgIndex: newIndex });
  }

  render() {
    const gallery = this.props.gallery;
    const className = this.props.className;
    const isEnabled = gallery.length > 1 && className === "big";

    return (
      <div className={"cart-image cart-image-" + className}>
        <img
          className={"cart-image__img cart-image-" + className + "__img"}
          src={gallery[this.state.imgIndex]}
          alt=""
        />

        {isEnabled && (
          <div className="cart-image__arrows">
            <div className="cart-image__arrows-left" onClick={this.previousImage}>
              <Arrow />
            </div>
            <div className="cart-image__arrows-right" onClick={this.nextImage}>
              <Arrow />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default CartImage;
