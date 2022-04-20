import { PureComponent } from "react";

import OverflowArrows from "../OverflowArrows/OverflowArrows.component";
import Thumbnails from "../Thumbnails/Thumbnails.component";

import "./Gallery.style.scss";

export class Gallery extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      imgIndex: 0,
      isHovering: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseHover = this.handleMouseHover.bind(this);
  }

  handleClick(index) {
    this.setState({ imgIndex: index });
  }

  handleMouseHover() {
    this.setState((state) => ({ isHovering: !state.isHovering }));
  }

  render() {
    const overflow = this.props.gallery.length > 4;
    const props = {
      overflow: overflow,
      gallery: this.props.gallery,
      handleClick: this.handleClick,
      handleMouseHover: this.handleMouseHover,
    };

    return (
      <div className="gallery">
        {overflow && this.state.isHovering && <OverflowArrows />}

        <Thumbnails {...props} />

        <img className="gallery__showcase" src={this.props.gallery[this.state.imgIndex]} alt="" />
      </div>
    );
  }
}

export default Gallery;
