import { PureComponent } from "react";

import "./Thumbnails.style.scss";

export class Thumbnails extends PureComponent {
  render() {
    return (
      <div
        className="thumbnails"
        onMouseEnter={this.props.handleMouseHover}
        onMouseLeave={this.props.handleMouseHover}
      >
        {this.props.gallery.map((src, index) => (
          <img
            className="thumbnails__item"
            key={index}
            src={src}
            alt=""
            onClick={() => this.props.handleClick(index)}
          />
        ))}
      </div>
    );
  }
}

export default Thumbnails;
