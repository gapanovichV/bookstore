import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import {StateSchema} from "app/providers/StoreProvider/config/StateScheme";
import {store} from "app/providers/StoreProvider";

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: StateSchema;
}

export const StoreProvider = (props: StoreProviderProps) => {
  const {
    children,
  } = props;

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};


