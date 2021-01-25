import React, { useLayoutEffect } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Route from "./route";
import history from "./history";
import Activity from "pages/Activity";

function Routes() {
  useLayoutEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return unlisten;
  }, []);

  return (
    <BrowserRouter history={history}>
      <Switch>
        <Route exact path={"/"} component={Activity} noContainer isPrivate />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
