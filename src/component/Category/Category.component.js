import { PureComponent } from "react";
import { Link } from "react-router-dom";

import history from "../../util/browserHistory";

import { classNames } from "../../util/functions";
import "./Category.style.scss";

export class Category extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: this.isSelected(history.location),
    };
  }

  isSelected(location) {
    return location.pathname === `/${this.props.name}`;
  }

  updateSelected(update) {
    this.setState({
      isSelected: this.isSelected(update.location),
    });
  }

  componentDidMount() {
    this.unlisten = history.listen((update) => this.updateSelected(update));
  }

  componentWillUnmount() {
    this.unlisten();
  }

  render() {
    return (
      <Link
        className={classNames("category", {
          "category--selected": this.state.isSelected,
        })}
        title={this.props.name}
        to={`/${this.props.name}`}
        onClick={() => this.setState({ isSelected: !this.state.isSelected })}
      >
        {this.props.name}
      </Link>
    );
  }
}

export default Category;
