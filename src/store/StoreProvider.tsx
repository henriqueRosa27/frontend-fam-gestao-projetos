import { Provider } from "react-redux";

import store from "./store";

interface StoreProviderProps {
  children: JSX.Element;
}

export const StoreProvider = ({ children }: StoreProviderProps) => (
  <Provider store={store}>{children}</Provider>
);
