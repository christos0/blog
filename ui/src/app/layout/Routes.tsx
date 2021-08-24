import { Route, Switch } from "react-router-dom";

import { Home } from "pages";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" render={Home} />
    </Switch>
  );
};
