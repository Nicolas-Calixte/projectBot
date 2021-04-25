import React, { useEffect } from "react"
import { Route, Switch, useHistory } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

import LogInPage from "./pages/LogInPage"
import SignUpPage from "./pages/SignUpPage"
import ResetPasswordPage from "./pages/ResetPasswordPage"
import VerificationPasswordCodePage from "./pages/VerificationPasswordCodePage"
import CreateNewPasswordPage from "./pages/CreateNewPasswordPage"
import ResetEmailPage from "./pages/ResetEmailPage"
import VerificationEmailCodePage from "./pages/VerificationEmailCodePage"
import NewEmailPage from "./pages/NewEmailPage"
import SignUpVerificationPage from "./pages/SignUpVerificationPage"
import Dashboard from "./pages/DashboardPage"
import Tasks from "./components/dashboardComponents/tasks/Tasks"
import NewTask from "./components/dashboardComponents/tasks/NewTask"
import Settings from "./components/dashboardComponents/settings/Settings"
import ResetEmailSettings from "./components/dashboardComponents/settings/settingsPages/ResetEmailSettings"
import VerificationEmailCodeSettings from "./components/dashboardComponents/settings/settingsPages/VerificationEmailCodeSettings"
import NewEmailSettings from "./components/dashboardComponents/settings/settingsPages/NewEmailSettings"
import ResetPasswordSettings from "./components/dashboardComponents/settings/settingsPages/ResetPasswordSettings"
import VerificationPasswordCodeSettings from "./components/dashboardComponents/settings/settingsPages/VerificationPasswordCodeSettings"
import NewPasswordSettings from "./components/dashboardComponents/settings/settingsPages/NewPasswordSettings"
import ContactUs from "./components/dashboardComponents/settings/settingsPages/ContactUs"
import LogOut from "./components/dashboardComponents/settings/settingsPages/LogOut"
import Account from "./components/dashboardComponents/settings/settingsPages/Account"

const App = () => {
  const history = useHistory()

  useEffect(() => {
    history.push("/log-in")
  }, [])

  return (
    <div>
      <Switch>
        <Route exact path="/log-in" component={LogInPage} />
        <Route exact path="/sign-up" component={SignUpPage} />
        <Route
          exact
          path="/sign-up/sign-up-verification"
          component={SignUpVerificationPage}
        />
        <Route
          exact
          path="/log-in/reset-password"
          component={ResetPasswordPage}
        />
        <Route
          exact
          path="/log-in/reset-password/verification-password-code"
          component={VerificationPasswordCodePage}
        />
        <Route
          exact
          path="/log-in/reset-password/verification-password-code/new-password"
          component={CreateNewPasswordPage}
        />
        <Route exact path="/log-in/reset-email" component={ResetEmailPage} />
        <Route
          exact
          path="/log-in/reset-email/verification-email-code"
          component={VerificationEmailCodePage}
        />
        <Route
          exact
          path="/log-in/reset-email/verification-email-code/new-email"
          component={NewEmailPage}
        />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/dashboard/tasks" component={Tasks} />
        <Route exact path="/dashboard/tasks/new-task" component={NewTask} />
        <Route exact path="/dashboard/accounts" component={Account} />
        <Route exact path="/dashboard/settings" component={Settings} />
        <Route
          exact
          path="/dashboard/settings/reset-email"
          component={ResetEmailSettings}
        />
        <Route
          exact
          path="/dashboard/settings/reset-email/verification-email-code"
          component={VerificationEmailCodeSettings}
        />
        <Route
          exact
          path="/dashboard/settings/reset-email/verification-email-code/new-email"
          component={NewEmailSettings}
        />
        <Route
          exact
          path="/dashboard/settings/reset-password"
          component={ResetPasswordSettings}
        />
        <Route
          exact
          path="/dashboard/settings/reset-password/verification-password-code"
          component={VerificationPasswordCodeSettings}
        />
        <Route
          exact
          path="/dashboard/settings/reset-password/verification-password-code/new-password"
          component={NewPasswordSettings}
        />
        <Route
          exact
          path="/dashboard/settings/contact-us"
          component={ContactUs}
        />
        <Route exact path="/dashboard/settings/log-out" component={LogOut} />
      </Switch>
    </div>
  )
}

export default App
