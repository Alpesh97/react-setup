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

import PageNotFoundView from "@views/404";
import DashboardView from "@views/dashboard";

const Routes = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Switch> 
          <Route path={routes.dashboard} component={DashboardView} />
          <Route path={routes.pageNotFound} component={PageNotFoundView} />
          <Redirect to={routes.pageNotFound} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default Routes;
