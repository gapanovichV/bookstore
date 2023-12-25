import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from './StateScheme';
import {AdminBookReducer} from "entities/AdminBook";

export function createReduxStore(initialState?: StateSchema, asyncReducers?: ReducersMapObject<StateSchema>,) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    adminBookPanel: AdminBookReducer,
  };

  return configureStore<StateSchema>({
    reducer: rootReducers,
    preloadedState: initialState,
  });
}
