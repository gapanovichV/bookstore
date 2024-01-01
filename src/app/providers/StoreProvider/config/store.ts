import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import {adminBookReducer} from "entities/AdminBook";
import {StateSchema} from "app/providers/StoreProvider/config/StateScheme";


const rootReducers: ReducersMapObject<StateSchema> = {
  adminBookPanel: adminBookReducer,
};
export const store = configureStore<StateSchema>({
  reducer: rootReducers
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

