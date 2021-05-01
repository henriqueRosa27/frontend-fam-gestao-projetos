import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import CircularProgress from "@material-ui/core/CircularProgress";
import store, { persist } from "./store";

interface StoreProviderProps {
  children: JSX.Element;
}

export const StoreProvider = ({ children }: StoreProviderProps) => (
  <Provider store={store}>
    <PersistGate
      loading={<CircularProgress color="secondary" />}
      persistor={persist}>
      {children}
    </PersistGate>
  </Provider>
);
