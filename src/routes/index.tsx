import { FC, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import { ContentContainer } from "../container";
import history from "./history";
import { autenticate } from "./routes";

export const Routes: FC = () => {
  return (
    <ConnectedRouter history={history}>
      <Suspense fallback={<div />}>
        <Switch>
          <Route exact path="/login" />
          <ContentContainer>
            {autenticate.map(route => (
              <Route
                key={route.path}
                exact
                path={route.path}
                component={() => <route.component />}
              />
            ))}
          </ContentContainer>
        </Switch>
      </Suspense>
    </ConnectedRouter>
  );
};
