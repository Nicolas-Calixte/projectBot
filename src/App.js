import React from "react"
import { Route, Switch } from "react-router-dom"

import LogInPage from "./pages/LogInPage"
import SignUpPage from "./pages/SignUpPage"
import ResetPasswordPage from "./pages/ResetPasswordPage"
import VerificationPasswordCodePage from "./pages/VerificationPasswordCodePage"
import CreateNewPasswordPage from "./pages/CreateNewPasswordPage"
import ResetEmailPage from "./pages/ResetEmailPage"
import SubscribeOptionsPage from "./pages/SubscribeOptionsPage"
import VerificationEmailCodePage from "./pages/VerificationEmailCodePage"
import NewEmailPage from "./pages/NewEmailPage"
import SignUpVerificationPage from "./pages/SignUpVerificationPage"
import Dashboard from "./pages/DashboardPage"
import Tasks from "./components/dashboardComponents/tasks/Tasks"

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/dashboard/tasks" component={Tasks} />
        <Route exact path="/login" component={LogInPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route
          exact
          path="/signup/signupverification"
          component={SignUpVerificationPage}
        />
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
          path="/login/resetemail/verificationemailcode"
          component={VerificationEmailCodePage}
        />
        <Route
          exact
          path="/login/resetemail/verificationemailcode/newemail"
          component={NewEmailPage}
        />
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
