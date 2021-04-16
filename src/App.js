import React, { useEffect } from "react"
import { Route, Switch, useHistory } from "react-router-dom"

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
import NewTask from "./components/dashboardComponents/tasks/NewTask"
import Settings from "./components/dashboardComponents/settings/Settings"
import ResetEmailSettings from "./components/dashboardComponents/settings/settingsPages/ResetEmailSettings"
import VerificationEmailCodeSettings from "./components/dashboardComponents/settings/settingsPages/VerificationEmailCodeSettings"
import NewEmailSettings from "./components/dashboardComponents/settings/settingsPages/NewEmailSettings"
import ResetPasswordSettings from "./components/dashboardComponents/settings/settingsPages/ResetPasswordSettings"
import VerificationPasswordCodeSettings from "./components/dashboardComponents/settings/settingsPages/VerificationPasswordCodeSettings"
import NewPasswordSettings from "./components/dashboardComponents/settings/settingsPages/NewPasswordSettings"
import ContactUs from "./components/dashboardComponents/settings/settingsPages/ContactUs"

const App = () => {
  const history = useHistory()

  useEffect(() => {
    history.push("/login")
  }, [])

  return (
    <div>
      <Switch>
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
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/dashboard/tasks" component={Tasks} />
        <Route exact path="/dashboard/tasks/newtask" component={NewTask} />
        <Route exact path="/dashboard/settings" component={Settings} />
        <Route
          exact
          path="/dashboard/settings/resetemail"
          component={ResetEmailSettings}
        />
        <Route
          exact
          path="/dashboard/settings/resetemail/verificationemailcode"
          component={VerificationEmailCodeSettings}
        />
        <Route
          exact
          path="/dashboard/settings/resetemail/verificationemailcode/newemail"
          component={NewEmailSettings}
        />
        <Route
          exact
          path="/dashboard/settings/resetpassword"
          component={ResetPasswordSettings}
        />
        <Route
          exact
          path="/dashboard/settings/resetpassword/verificationpasswordcode"
          component={VerificationPasswordCodeSettings}
        />
        <Route
          exact
          path="/dashboard/settings/resetpassword/verificationpasswordcode/newpassword"
          component={NewPasswordSettings}
        />
        <Route
          exact
          path="/dashboard/settings/contactus"
          component={ContactUs}
        />
      </Switch>
    </div>
  )
}

export default App
