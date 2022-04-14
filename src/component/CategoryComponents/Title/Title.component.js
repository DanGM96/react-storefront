import { PureComponent } from "react";

import "./Title.style.scss";

export class Title extends PureComponent {
  render() {
    return <span className="title">{this.props.id}</span>;
  }
}

export default Title;
