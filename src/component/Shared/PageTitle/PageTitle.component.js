import { PureComponent } from "react";

import "./PageTitle.style.scss";

export class PageTitle extends PureComponent {
  render() {
    return (
      <span className={"page-title page-title-" + this.props.className}>{this.props.text}</span>
    );
  }
}

export default PageTitle;
