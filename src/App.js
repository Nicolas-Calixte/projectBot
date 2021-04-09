import React from "react"
import { BrowserRouter as Route, Switch } from "react-router-dom"

import HomePage from "./pages/HomePage"
import LogInPage from "./pages/LogInPage"
import SignUpPage from "./pages/SignUpPage"
import ResetEmailPage from "./pages/ResetEmailPage"
import ResetPasswordPage from "./pages/ResetPasswordPage"
import SubscribeOptionsPage from "./pages/SubscribeOptionsPage"

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LogInPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/resetemail" component={ResetEmailPage} />
        <Route exact path="/resetpassword" component={ResetPasswordPage} />
        <Route
          exact
          path="/subscribeoptions"
          component={SubscribeOptionsPage}
        />
      </Switch>
    </div>
  )
}

export default App
