import { lazy } from "react";
import { Route, Switch } from "react-router-dom";

const Home = lazy(() => import("pages/home/Home"));

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
};
