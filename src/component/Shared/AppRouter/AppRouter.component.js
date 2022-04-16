import { PureComponent } from "react";
import { Router } from "react-router-dom";

import history from "../../../util/browserHistory";

export class AppRouter extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      action: history.action,
      location: history.location,
    };
  }

  historyChange(update) {
    this.setState({
      action: update.action,
      location: update.location,
    });
  }

  componentDidMount() {
    this.unlisten = history.listen((update) => this.historyChange(update));
  }

  componentWillUnmount() {
    this.unlisten();
  }

  render() {
    return (
      <Router
        {...this.props}
        location={this.state.location}
        navigationType={this.state.action}
        navigator={history}
      />
    );
  }
}

export default AppRouter;
