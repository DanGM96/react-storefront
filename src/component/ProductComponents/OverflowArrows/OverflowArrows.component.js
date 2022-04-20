import { PureComponent } from "react";

import { ReactComponent as Arrow } from "../../../asset/icons/arrow-down.svg";

import "./OverflowArrows.style.scss";

export class OverflowArrows extends PureComponent {
  render() {
    return (
      <div className="arrows">
        <Arrow className="arrows__up " />
        <Arrow className="arrows__down" />
      </div>
    );
  }
}

export default OverflowArrows;
