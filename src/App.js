import React, { useEffect } from "react"
import { Route, Switch, useHistory } from "react-router-dom"

import LogInPage from "./pages/LogInPage"
import SignUpPage from "./pages/SignUpPage"
import ResetPasswordPage from "./pages/ResetPasswordPage"
import VerificationPasswordCodePage from "./pages/VerificationPasswordCodePage"
import CreateNewPasswordPage from "./pages/CreateNewPasswordPage"
import ResetEmailPage from "./pages/ResetEmailPage"
import SubscribeOptionsPage from "./pages/SubscribeOptionsPage"

const App = () => {
  const history = useHistory()

  useEffect(() => history.push("/login"), [])

  return (
    <div>
      <Switch>
        <Route exact path="/login" component={LogInPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route
          exact
          path="/login/resetpassword"
          component={ResetPasswordPage}
        />
        <Route
          exact
          path="/login/resetpassword/verificationpasswordcode"
          component={VerificationPasswordCodePage}
        />
        <Route
          exact
          path="/login/resetpassword/verificationpasswordcode/newpassword"
          component={CreateNewPasswordPage}
        />
        <Route exact path="/login/resetemail" component={ResetEmailPage} />
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
