import { createStore, combineReducers } from "redux";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import run from "./module/reducers";
import auth from "./auth/reducers";
import register from "./register/reducers";

const rootReducer = combineReducers({
  operations: run,
  auth,
  register,
});

const persistedReducer = persistReducer(
  {
    key: "root",
    storage,
  },
  rootReducer
);

export const store = createStore(persistedReducer);
export const persisetdStore = persistStore(store);
