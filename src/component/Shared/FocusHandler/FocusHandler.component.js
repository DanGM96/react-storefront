import { createRef, PureComponent } from "react";

import Overlay from "../Overlay/Overlay.component";

import { toggleOverflow } from "../../../util/functions";
import MousePosition from "../../../util/MousePosition";
import "./FocusHandler.style.scss";

export class FocusHandler extends PureComponent {
  constructor(props) {
    super(props);
    this.ref = createRef();
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleBlur(event) {
    const target = event.currentTarget;
    if (!target) return;

    const clickedElement = document.elementFromPoint(MousePosition.mouseX, MousePosition.mouseY);
    const isChildClick = target.contains(event.relatedTarget);
    if (!isChildClick) this.props.onBlur(clickedElement);
  }

  componentDidMount() {
    this.ref.current.focus();
    toggleOverflow();
  }

  componentWillUnmount() {
    toggleOverflow();
  }

  render() {
    return (
      <>
        <Overlay withColor={this.props.withColor} />
        <div className="focus-handler" ref={this.ref} onBlur={this.handleBlur} tabIndex={0}>
          {this.props.children}
        </div>
      </>
    );
  }
}

export default FocusHandler;
