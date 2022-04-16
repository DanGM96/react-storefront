import { PureComponent } from "react";

import "./Gallery.style.scss";

export class Gallery extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      imgIndex: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index) {
    this.setState({ imgIndex: index });
  }

  render() {
    return (
      <>
        <div className="gallery">
          {this.props.gallery.map((src, index) => (
            <img
              className="gallery__thumbnails"
              key={index}
              src={src}
              alt=""
              onClick={() => this.handleClick(index)}
            />
          ))}
        </div>
        <img className="gallery__showcase" src={this.props.gallery[this.state.imgIndex]} alt="" />
      </>
    );
  }
}

export default Gallery;
