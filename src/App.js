import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "./components/Context";
import LogInPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage";
import ResetEmailPage from "./pages/ResetEmailPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";

const App = () => {
  return (
    <Provider>
      <div>
        <Router>
          <Switch>
            <Route exact path="/log-in" component={LogInPage} />
            <Route exact path="/sign-up" component={SignUpPage} />
            <Route exact path="/reset-email" component={ResetEmailPage} />
            <Route exact path="/reset-password" component={ResetPasswordPage} />
            <Route exact path="/subscribe-options" component={} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
};

export default App;