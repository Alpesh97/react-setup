import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useLocation,
} from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import { theme } from "@utils/theme";
import { routes } from "@utils/constant";
import { headerTop, closeMobileMenu } from "@utils/commonFunctions";
import PrivateRoute from "@utils/privateRoute";

import PageNotFoundView from "@views/404";
import InvoiceView from "@views/invoice";
import MyProfileView from "@views/profile/my-profile";
import ChildAccountView from "@views/profile/child-account";
import ChangePasswordView from "@views/profile/change-password";
import NotificationView from "@views/profile/notifications";
import DashboardView from "@views/dashboard";
import LoginView from "@views/login";
import WelcomePage from "@views/welcome";
import MapCockpitView from "@views/mapCockpit";
import OnlineReport from "@views/report";
import OnlineRequestView from "@views/online-request";

const useUpdater = () => {
  const location = useLocation();
  useEffect(() => {
    headerTop();
    closeMobileMenu();
  }, [location]);
};

const UpdateWrapper = () => {
  useUpdater();

  return (
    <Switch>
      <PrivateRoute exact path={"/"} component={DashboardView} />
      <Route exact path={routes.login} component={LoginView} />
      <PrivateRoute exact path={routes.myProfile} component={MyProfileView} />
      <PrivateRoute
        exact
        path={routes.childAccount}
        component={ChildAccountView}
      />
      <PrivateRoute
        exact
        path={routes.changePassword}
        component={ChangePasswordView}
      />
      <PrivateRoute
        exact
        path={routes.notifications}
        component={NotificationView}
      />
      <PrivateRoute exact path={routes.dashboard} component={DashboardView} />
      <PrivateRoute exact path={routes.welcome} component={WelcomePage} />
      <PrivateRoute
        exact
        path={routes.pageNotFound}
        component={PageNotFoundView}
      />
      <PrivateRoute exact path={routes.mapCockpit} component={MapCockpitView} />
      <PrivateRoute exact path={routes.report} component={OnlineReport} />
      <PrivateRoute
        exact
        path={routes.onlineRequest}
        component={OnlineRequestView}
      />
      <PrivateRoute exact path={routes.invoice} component={InvoiceView} />
      <Redirect to={routes.pageNotFound} />
    </Switch>
  );
};

const Routes = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <UpdateWrapper />
      </Router>
    </ThemeProvider>
  );
};

export default Routes;
