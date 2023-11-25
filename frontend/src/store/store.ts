import {
  PayloadAction,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { cartReducer } from "../features/Cart/CartSlice";

// import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["socket"],
};

const reducer = combineReducers({
  cart: cartReducer,
});

const rootReducer = (state: any, action: PayloadAction) => {
  if (action.type === "auth/logout") {
    state = undefined;
  }
  return reducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);

export default store;